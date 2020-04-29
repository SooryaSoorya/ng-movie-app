import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { NavMenuComponent } from "./nav-menu.component";
import { MovieService } from "../movie/services/movie.services";
import { DebugElement, ElementRef } from "@angular/core";
import { By } from "@angular/platform-browser";

describe("NavMenuComponent", () => {
  let component: NavMenuComponent;
  let fixture: ComponentFixture<NavMenuComponent>;
  let debugEl: DebugElement;
  let menuItem: ElementRef;

  beforeEach(async(() => {
    const a = setup().default();
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [NavMenuComponent],
      providers: [MovieService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("when ngOnInit is called it should", () => {
    const { build } = setup().default();
    const c = build();
    c.ngOnInit();
  });
  it("when changeMenuItem is called it should", () => {
    var event = {
      type: "click",
      stopPropagation: function () {},
      preventDefault: function () {},
      target: { innerText: "Action" },
    };
    console.log("ElementRef", event);
    const { build } = setup().default();
    const c = build();
    fixture.detectChanges();
    c.changeMenuItem(event);
  });
});

function setup() {
  const httpClientSpy = jasmine.createSpyObj("HttpClient", ["get"]);
  const movieService = new MovieService(<any>httpClientSpy);
  const builder = {
    movieService,
    default() {
      return builder;
    },
    build() {
      return new NavMenuComponent(movieService);
    },
  };
  return builder;
}

import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { SearchBarComponent } from "./search-bar.component";
import { MovieService } from "../movie/services/movie.services";

describe("SearchBarComponent", () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async(() => {
    const a = setup().default();
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SearchBarComponent],
      providers: [MovieService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
    it('when ngOnInit is called it should', () => {
        const { build } = setup().default();
        const c = build();
        c.ngOnInit();
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
            return new SearchBarComponent(movieService);
        }
    }
    return builder;
}
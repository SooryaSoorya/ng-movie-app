import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ActivatedRoute } from "@angular/router";

import { MovieDetailComponent } from "./movie-detail.component";
import { MovieService } from "../movie/services/movie.services";

describe("MovieDetailComponent", () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;

  beforeEach(async(() => {
    const a = setup().default();
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [MovieDetailComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: { id: 1 } } },
        },
        MovieService,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailComponent);
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
  it("when getMovieDetails is called it should", () => {
    const { build } = setup().default();
    const param = { id: "1" };
    const c = build();
    c.getMovieDetails(param["id"]);
  });
});

function setup() {
  const activatedRoute = jasmine.createSpyObj(ActivatedRoute);
  const httpClientSpy = jasmine.createSpyObj("HttpClient", ["get"]);
  const movieService = new MovieService(<any>httpClientSpy);
  const builder = {
    movieService,
    activatedRoute,
    default() {
      return builder;
    },
    build() {
      return new MovieDetailComponent(movieService, activatedRoute);
    },
  };
  return builder;
}

import {
  async,
  ComponentFixture,
  TestBed,
  getTestBed,
  fakeAsync,
  tick,
} from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { HttpParams } from "@angular/common/http";

import { MovieComponent } from "./movie.component";
import { MovieService } from "./services/movie.services";
import { API_CONIG } from ".././shared/constants";

describe("MovieComponent", () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;
  let injector;
  let movieService: {
    fetchFaults: () => {
      (): any;
      new (): any;
      subscribe: { (arg0: (_: any) => Promise<void>): void; new (): any };
    };
  };
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    const a = setup().default();
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [MovieComponent],
      providers: [MovieService],
    }).compileComponents();

    injector = getTestBed();
    movieService = injector.get(MovieService);
    httpMock = injector.get(HttpTestingController);
  }));

  afterEach(() => {
    httpMock.verify();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieComponent);
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

  it("should get the faults", fakeAsync(() => {
    const results = { data: [] };
    const moviesEndpoint = `${API_CONIG.API_ENDPOINT}?apikey=${API_CONIG.API_KEY}`;
    const dummyHosts = [
      {_items: 'Hosts list'}
    ];
    const dummyParams = new HttpParams()
      .append('where', JSON.stringify({'_is_template': false}))
      .append('max_results', JSON.stringify(25));

    const req = httpMock.expectOne(
      (req) => req.method === "GET" && req.url === moviesEndpoint
    );
    expect(req.request.params.get("where")).toEqual('{"_is_template":false}');
    req.flush(dummyHosts);
  }));


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
      return new MovieComponent(movieService);
    },
  };
  return builder;
}

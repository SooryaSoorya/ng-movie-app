import { TestBed, inject } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

import { API_CONIG } from "../../shared/constants";
import { MovieService } from "./movie.services";
import { dataSet1, dataSet2 } from "../test-data/sample-data";

describe("Movie Service", () => {
  let httpTestingController: HttpTestingController;
  let service: MovieService;

  const movies = [dataSet1, dataSet2];
  const moviesEndpoint = `${API_CONIG.API_ENDPOINT}?apikey=${API_CONIG.API_KEY}`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService],
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(MovieService);
  });

  describe("getMovies", () => {
    it("should call get method to retrieve all movies initial time", () => {
      service.getMovies().subscribe((movies) => {
        expect(movies[1].Title).toEqual("The Avenger");
      });
    });
  });

  describe("getMovieById", () => {
    it("should call get method to retrieve the movie by id", () => {
      service.getMovieById(movies[0]["imdbID"]).subscribe((data:any) => {
        expect(data['Title']).toEqual(movies[0].Title);
      });

      const req = httpTestingController.expectOne(`${moviesEndpoint}&i=${movies[0]["imdbID"]}&plot=full`);
      // console.log(req);
      // req.flush(movies[0]);
      // httpTestingController.verify();
    });
  });
});

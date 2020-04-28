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
  let movieService: MovieService;
  let httpClientSpy: { get: jasmine.Spy };

  const movies = [dataSet1, dataSet2];
  const moviesEndpoint = `${API_CONIG.API_ENDPOINT}?apikey=${API_CONIG.API_KEY}`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService],
    });

    httpTestingController = TestBed.get(HttpTestingController);
    movieService = TestBed.get(MovieService);
  });

  beforeEach(() => {
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    movieService = new MovieService(<any> httpClientSpy);
  });
  
  // it('should return expected heroes (HttpClient called once)', () => {
    
  //   httpClientSpy.get.and.returnValue(asyncData(movies[0]));
  
  //   heroService.getHeroes().subscribe(
  //     heroes => expect(heroes).toEqual(expectedHeroes, 'expected heroes'),
  //     fail
  //   );
  //   expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  // });
  
  // it('should return an error when the server returns a 404', () => {
  //   const errorResponse = new HttpErrorResponse({
  //     error: 'test 404 error',
  //     status: 404, statusText: 'Not Found'
  //   });
  
  //   httpClientSpy.get.and.returnValue(asyncError(errorResponse));
  
  //   heroService.getHeroes().subscribe(
  //     heroes => fail('expected an error, not heroes'),
  //     error  => expect(error.message).toContain('test 404 error')
  //   );
  // });

});
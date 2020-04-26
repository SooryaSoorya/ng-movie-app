import { Injectable } from "@angular/core";

// RxJs
import { Observable } from "rxjs/internal/Observable";
import { of } from "rxjs/internal/observable/of";
import { HttpClient } from "@angular/common/http";
import { catchError, tap, map } from "rxjs/operators";

import { Movie } from "../models/movie.models";
import { API_CONIG } from "../../shared/constants";

@Injectable()
export class MovieService {
  private moviesEndpoint = `${API_CONIG.API_ENDPOINT}?apikey=${API_CONIG.API_KEY}`;
  constructor(private http: HttpClient) {}

  getMovies() {
    var url: string = `${this.moviesEndpoint}&s=people`;
    return this.http.get(url).pipe(
      map((res: any) => res.Search),
      catchError(this.handleError("getMovies", []))
    );
  }

  getMovieByTitle(title: string): Observable<Movie> {
    var url: string = `${this.moviesEndpoint}&s=${title}`;
    return this.http.get(url).pipe(
      map((res: any) => res.Search),
      catchError(this.handleError("getMovieByTitle", []))
    );
  }

  getMovieById(id: string): Observable<Movie> {
    var url: string = `${this.moviesEndpoint}&i=${id}&plot=full`;
    return this.http.get(url).pipe(
      map((res: any) => res),
      catchError(this.handleError("getMovieByTitle", []))
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

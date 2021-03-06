import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

import { MovieService } from "./services/movie.services";
import { Movie } from "./models/movie.models";
import { MOVIE_PROPS } from "../shared/constants";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"],
})
export class MovieComponent implements OnInit {
  public movies: Movie[];
  public visibleMovies: Movie[];
  public MOVIE_PROPS = MOVIE_PROPS;
  public loading: boolean;

  sortBy: any = "Select";

  constructor(private movieService: MovieService) {
    this.loading = true;
    movieService.getMovies().subscribe(
      (movies) => {
        this.movies = movies;
        this.loading = false;
      },
      (error) => (this.loading = false)
    );
  }

  ngOnInit(): void {}

  onSearch(movies: Movie[]) {
    this.movies = movies;
  }

  onNavMenuChange(movies: Movie[]) {
    this.movies = movies;
  }

  public showLoading(loading: boolean) {
    this.loading = loading;
  }

  sortMovies() {
    this.loading = true;
    const sortValue = this.sortBy;
    this.movies.sort((a: any, b: any) => {
      if (a[sortValue] > b[sortValue]) {
        return -1;
      } else if (a[sortValue] < b[sortValue]) {
        return 1;
      } else {
        return 0;
      }
    });
    this.loading = false;
  }
}

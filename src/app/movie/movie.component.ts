import { Component, OnInit } from "@angular/core";

import { Movie } from "./models/movie.models";
import { MovieService } from "./services/movie.services";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"],
})
export class MovieComponent implements OnInit {
  public movies: Movie[];
  public visibleMovies: Movie[];
  sortBy: any = "id";
  public l = console.log;

  constructor(private movieService: MovieService) {
    movieService.getMovies().subscribe((movies) => {
      this.movies = movies;
      this.l("getMovies", movies);
    });
  }

  ngOnInit(): void {}
}

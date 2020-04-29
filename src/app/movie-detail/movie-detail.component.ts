import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Movie } from "../movie/models/movie.models";
import { MovieService } from "../movie/services/movie.services";
import { FadeIn } from "../shared/animation";

import { MOVIE_PROPS } from "../shared/constants";
@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.scss"],
  animations: [FadeIn],
})
export class MovieDetailComponent implements OnInit {
  public loading: boolean;
  public movie: any;
  public error: string = "";
  public MOVIE_PROPS = MOVIE_PROPS;

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) {
    this.loading = true;
  }

  ngOnInit() {
    let movieId = this.activatedRoute.snapshot.params["id"];
    this.getMovieDetails(movieId);
  }

  getMovieDetails(id: string) {
    this.movieService.getMovieById(id).subscribe(
      (movie) => {
        this.movie = movie;
        this.loading = false;
      },
      (error) => (this.loading = false)
    );
  }
}

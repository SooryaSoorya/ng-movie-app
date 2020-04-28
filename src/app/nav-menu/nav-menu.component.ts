import { Component, OnInit , Output, EventEmitter } from "@angular/core";

import { MovieService } from "../movie/services/movie.services";
import { MovieGenre } from "../movie/models/genre.model";
import { Movie } from "../movie/models/movie.models";

@Component({
  selector: "app-nav-menu",
  templateUrl: "./nav-menu.component.html",
  styleUrls: ["./nav-menu.component.scss"],
})
export class NavMenuComponent implements OnInit {
  public movies: any;
  public movieGenre = MovieGenre;
  public loading: boolean;

  selectedGenre = "action";
  objectKeys = Object.keys;

  @Output() onNavMenuChange = new EventEmitter<Movie>();
  @Output() showLoading = new EventEmitter<boolean>();

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {}

  changeMenuItem(event: any) {
    event.preventDefault();
    const CurrentGenre = event.target.innerText.toLowerCase();
    this.applyChange(CurrentGenre);
  }

  private applyChange(filterBy: string) {
    this.selectedGenre = filterBy;
    this.showLoading.emit(true);
    this.movieService.getMovieByTitle(filterBy).subscribe(
      (movies) => {
        this.onNavMenuChange.emit(movies);
        this.showLoading.emit(false);
      },
      (error) => (this.loading = false)
    );
  }
}

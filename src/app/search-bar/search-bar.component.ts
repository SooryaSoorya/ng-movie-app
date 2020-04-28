import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { MovieService } from "../movie/services/movie.services";

import { Movie } from "../movie/models/movie.models";
@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"],
})
export class SearchBarComponent implements OnInit {
  searchText: any = "";
  public movies: any;
  @Output() onSearch = new EventEmitter<Movie>();
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {}

  onEnter() {
    this.movieService.getMovieByTitle(this.searchText).subscribe((movies) => {
      this.onSearch.emit(movies);
    });
  }
}

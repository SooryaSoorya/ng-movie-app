import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { MovieRoutingModule } from "./movie-routing.module";
import { MovieComponent } from "./movie.component";
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { LoaderComponent } from "../loader/loader.component";
import { MovieDetailComponent } from "../movie-detail/movie-detail.component";
import { NoDataComponent } from "../no-data/no-data.component";

import { MovieService } from "./services/movie.services";

@NgModule({
  declarations: [
    MovieComponent,
    SearchBarComponent,
    LoaderComponent,
    MovieDetailComponent,
    NoDataComponent
  ],
  imports: [CommonModule, MovieRoutingModule, FormsModule, HttpClientModule],
  providers: [HttpClientModule, MovieService],
})
export class MovieModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { MovieRoutingModule } from "./movie-routing.module";

import { MovieComponent } from "./movie.component";
import { LoaderComponent } from "../loader/loader.component";
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { MovieDetailComponent } from "../movie-detail/movie-detail.component";
import { NoDataComponent } from "../no-data/no-data.component";
import { NavMenuComponent } from "../nav-menu/nav-menu.component";

import { MovieService } from "./services/movie.services";

@NgModule({
  declarations: [
    MovieComponent,
    LoaderComponent,
    SearchBarComponent,
    MovieDetailComponent,
    NoDataComponent,
    NavMenuComponent
  ],
  imports: [CommonModule, MovieRoutingModule, FormsModule, HttpClientModule],
  providers: [HttpClientModule, HttpClient, MovieService],
})
export class MovieModule {}

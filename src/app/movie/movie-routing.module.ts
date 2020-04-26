import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MovieComponent } from "./movie.component";
import { MovieDetailComponent } from "../movie-detail/movie-detail.component";

const routes: Routes = [
  { path: "movies", component: MovieComponent },
  { path: "movies/:type/:id", component: MovieDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieRoutingModule {}

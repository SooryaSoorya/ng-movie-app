import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MovieComponent } from "./movie/movie.component";
const routes: Routes = [
  { path: "", component: MovieComponent },
  {
    path: "movie",
    loadChildren: () =>
      import("./movie/movie.module").then((m) => m.MovieModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

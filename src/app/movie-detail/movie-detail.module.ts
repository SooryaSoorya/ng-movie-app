import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from "@angular/common/http";
import { MovieDetailRoutingModule } from './movie-detail-routing.module';

import { MovieService } from "../movie/services/movie.services";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MovieDetailRoutingModule
  ],
  providers: [HttpClient, MovieService],
})
export class MovieDetailModule { }

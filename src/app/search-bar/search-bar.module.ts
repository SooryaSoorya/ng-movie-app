import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from "@angular/common/http";
import { SearchBarRoutingModule } from './search-bar-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SearchBarRoutingModule
  ],
  providers: [HttpClient],
})
export class SearchBarModule { }

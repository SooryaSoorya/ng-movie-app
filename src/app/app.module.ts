import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SidebarModule } from "./sidebar/sidebar.module";
import { MovieModule } from "./movie/movie.module";
import { SearchBarModule } from "./search-bar/search-bar.module";
import { LoaderModule } from "./loader/loader.module";
import { MovieDetailModule } from "./movie-detail/movie-detail.module";
import { NoDataModule } from "./no-data/no-data.module";
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SidebarModule,
    MovieModule,
    SearchBarModule,
    LoaderModule,
    MovieDetailModule,
    NoDataModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

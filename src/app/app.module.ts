import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SidebarModule } from "./sidebar/sidebar.module";
import { MovieModule } from "./movie/movie.module";
import { SearchBarModule } from "./search-bar/search-bar.module";
import { LoaderModule } from "./loader/loader.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    MovieModule,
    SearchBarModule,
    LoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

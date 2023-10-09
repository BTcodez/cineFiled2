import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { CinefilesComponent } from './cinefiles/cinefiles.component';
import { FilmComponent } from './shared/film/film.component';
import { MyWatchlistComponent } from './watchlist/my-watchlist/my-watchlist.component';
import { LibraryComponent } from './watchlist/library/library.component';
import { SearchComponent } from './cinefiles/search/search.component';
import { UserComponent } from './shared/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    WatchlistComponent,
    CinefilesComponent,
    FilmComponent,
    MyWatchlistComponent,
    LibraryComponent,
    SearchComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

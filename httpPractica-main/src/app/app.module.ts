import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import {YoutubeService} from './Injectables/youtube.service';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { youtubeSearchInjectable } from './Injectables/youtube-search.service';
import { FormsModule } from '@angular/forms';
import { YouTubeSearchComponent } from './you-tube-search/you-tube-search.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { UrlPipesPipe } from './url-pipes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    SearchResultComponent,
    YouTubeSearchComponent,
    SimpleHttpComponent,
    UrlPipesPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: youtubeSearchInjectable,
  bootstrap: [AppComponent]
})
export class AppModule { }

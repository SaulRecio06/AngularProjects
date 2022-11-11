import {Component, Input, OnInit} from '@angular/core';
import { SearchResult } from '../Models/searchResult';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  
  @Input() result!: SearchResult;
  PruebaUrl: string ="rdlvUYWTvBw";
  BaseUrl: string = "https://www.youtube.com/embed/rdlvUYWTvBw";

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(){}

  getUrl()
  {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.result.videoUrl);
  }
}

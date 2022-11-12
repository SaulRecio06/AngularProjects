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
  LinkVideo: string="";

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(){}

  getUrl()
  {
    
          // console.log(this.BaseUrl);

    const Base : string = this.result.videoUrl.split('/')[2];
    const id : string = this.result.videoUrl.split('=')[1];
    this.LinkVideo="https://"+Base+"/embed/"+id;
      
     
    // console.log(Base);
    // console.log(id);

    console.log(this.LinkVideo);

    return this.sanitizer.bypassSecurityTrustResourceUrl(this.LinkVideo);
  }
  
}

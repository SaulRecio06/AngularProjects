import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SearchResult } from '../Models/searchResult';

@Component({
  selector: 'app-you-tube-search',
  templateUrl: './you-tube-search.component.html',
  styleUrls: ['./you-tube-search.component.css']
})
export class YouTubeSearchComponent implements OnInit {
  results: SearchResult[] | undefined;
  loading: boolean | undefined;
  PruebaUrl: string ="rdlvUYWTvBw";
  // BaseUrl: string = "https://www.youtube.com/embed/rdlvUYWTvBw";
  BaseUrl: string = "https://www.youtube.com/watch?v=rdlvUYWTvBw";
  LinkVideo: string="";


  constructor(private sanitizer: DomSanitizer) { }
 

  updateResults(results: SearchResult[]): void {
    this.results = results;
  }
  ngOnInit(){
  }

  getUrl()
  {
    // console.log(this.BaseUrl);

    const Base : string = this.BaseUrl.split('/')[2];
    const id : string = this.BaseUrl.split('=')[1];
    this.LinkVideo="https://"+Base+"/embed/"+id;
      
     
    // console.log(Base);
    // console.log(id);

    console.log(this.LinkVideo);

    return this.sanitizer.bypassSecurityTrustResourceUrl(this.LinkVideo);
  }
  }





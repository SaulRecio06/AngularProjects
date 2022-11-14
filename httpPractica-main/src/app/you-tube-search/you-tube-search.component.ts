import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../Models/searchResult';

@Component({
  selector: 'app-you-tube-search',
  templateUrl: './you-tube-search.component.html',
  styleUrls: ['./you-tube-search.component.css']
})
export class YouTubeSearchComponent implements OnInit {
  results: SearchResult[] | undefined;
  loading: boolean | undefined;
  // PruebaUrl: string ="rdlvUYWTvBw";
  // BaseUrl: string = "https://www.youtube.com/embed/rdlvUYWTvBw";
  // BaseUrl: string = "https://www.youtube.com/watch?v=rdlvUYWTvBw";
  // LinkVideo: string="";


  constructor() { }
 

  updateResults(results: SearchResult[]): void {
    this.results = results;
  }
  ngOnInit(){
  }

  }





import {Component, Input, OnInit} from '@angular/core';
import { SearchResult } from '../Models/searchResult';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  
  @Input() result!: SearchResult;
  constructor() { }

  ngOnInit(): void {
  }

}

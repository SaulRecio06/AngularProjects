import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SearchResult} from '../Models/searchResult';
import {map, Observable} from 'rxjs';

export const YOUTUBE_API_KEY: string = "AIzaSyD4KD1WTj-tnjd7XNrlMwRzGRAm96BMtxA";
export const YOUTUBE_API_URL: string = "https://www.googleapis.com/youtube/v3/search";

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  xyz!: SearchResult[];
  constructor(
    private http: HttpClient,
    @Inject(YOUTUBE_API_KEY) private apiKey: string,
    @Inject(YOUTUBE_API_URL) private apiUrl: string
  ) { }

  search(query: string): Observable<SearchResult[]>{
    const params: string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');
    
    const queryUrl = `${this.apiUrl}?${params}`;
    
    return this.http.get(this.apiUrl + `?${ params }`).pipe(
      map((response: any) =>{
        return response.items;
      }),
      map((items: { id: { videoId: any; }; snippet: { description: any; thumbnails: { high: any; }; title: any; }; }[]) => 
        {
          return items.map((item:
            {id: {videoId: any;}; snippet: {description: any;
            thumbnails: {high: any;}; title: any;}; })=> {
              console.log(item);
              return new SearchResult({
                id: item.id.videoId,
                descripcion: item.snippet.description,
                thumbnailUrl: item.snippet.thumbnails.high.url,
                title: item.snippet.title
              });
            });
        })
    );
      

  }
}

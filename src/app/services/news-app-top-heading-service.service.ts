import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsAppTopHeadingServiceService {

  newsApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=86d05f5a8d6e404080964d5ad5d01af3'
  techNewsApiUrl = 'https://newsapi.org/v2/top-headlines?country=de&category=technology&apiKey=86d05f5a8d6e404080964d5ad5d01af3'
  sportsNewsApiUrl = 'https://newsapi.org/v2/top-headlines?country=de&category=sports&apiKey=86d05f5a8d6e404080964d5ad5d01af3'


  constructor(private _http: HttpClient) { }

  topHeadlines(): Observable<any> {
    return this._http.get(this.newsApiUrl)
  }

  techNews(): Observable<any> {
    return this._http.get(this.techNewsApiUrl);
  }

  sportsNews(): Observable<any> {
    return this._http.get(this.sportsNewsApiUrl)
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { NEWS } from './mock-news';
import { News } from './news';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class NewsService {

  private latestNewsUrl = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=77e102c1823d437e9aaf84277b82ad0d';
  private latestTechNewsUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=77e102c1823d437e9aaf84277b82ad0d';
  private latestTechNewsUSUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=77e102c1823d437e9aaf84277b82ad0d';
  private latestEntertainmentNewsUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=77e102c1823d437e9aaf84277b82ad0d';
  constructor(private http: HttpClient) { }
  
  getLatestNews(): Observable<News[]> {
   return this.http.get<News[]>(this.latestNewsUrl);
  }

  getLatestTechNews(): Observable<News[]> {
    return this.http.get<News[]>(this.latestTechNewsUSUrl);
  }

  getLatestEntertainmentNews(): Observable<News[]> {
    return this.http.get<News[]>(this.latestEntertainmentNewsUrl);
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { NEWS } from './mock-news';
import { News } from './news';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class NewsService {
  currentDate = new Date();
  yesterDay = new Date(this.currentDate.getTime() - 24*60*60*1000).toISOString();
  private otherNewsStoriesUrl = 'https://newsapi.org/v2/everything?language=en&from='+this.yesterDay+'&to='+this.currentDate.toISOString()+'&sortBy=publishedAt&sources=cnn,bloomberg,bbc-news,fortune,hacker-news,techcrunch,the-hindu,the-verge,the-economist&pagesize=75&apiKey=77e102c1823d437e9aaf84277b82ad0d';
  
  //private latestNewsGlobalEnglish = "https://newsapi.org/v2/everything?from="+this.yesterDay+"&to="+this.currentDate.toISOString()+"&apiKey=77e102c1823d437e9aaf84277b82ad0d";
  private latestNewsUrl = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=77e102c1823d437e9aaf84277b82ad0d';
  private latestTechNewsUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=77e102c1823d437e9aaf84277b82ad0d';
  private latestTechNewsUSUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=77e102c1823d437e9aaf84277b82ad0d';
  private otherStoriesTechUrl = 'https://newsapi.org/v2/everything?language=en&from='+this.yesterDay+'&to='+this.currentDate.toISOString()+'&sortBy=publishedAt&sources=hacker-news,techcrunch,the-verge,techcrunch,the-next-web,wired&pagesize=75&apiKey=77e102c1823d437e9aaf84277b82ad0d';
  private latestEntertainmentNewsUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=77e102c1823d437e9aaf84277b82ad0d';
  constructor(private http: HttpClient) { }
  
  
  getLatestNews(): Observable<News[]> {
   return this.http.get<News[]>(this.latestNewsUrl);
  }

  getOtherNews(): Observable<News[]> {
    return this.http.get<News[]>(this.otherNewsStoriesUrl);
  }

  getLatestTechNews(): Observable<News[]> {
    return this.http.get<News[]>(this.latestTechNewsUSUrl);
  }

  getOtherTechNews(): Observable<News[]> {
    return this.http.get<News[]>(this.otherStoriesTechUrl);
  }

  getLatestEntertainmentNews(): Observable<News[]> {
    return this.http.get<News[]>(this.latestEntertainmentNewsUrl);
  }

}

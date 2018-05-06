import { Component, OnInit } from '@angular/core';
import { News} from '../news';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  latestNews: News[];
  newsCarousel: News[];
  otherNews: News[]; 
  
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getLatestNews();
  }

  getLatestNews(): void {
    this.newsService.getLatestNews().subscribe((latestNews:any) => {
      this.latestNews = latestNews.articles;
      this.newsCarousel = this.latestNews.slice(0,3);
      this.latestNews = this.latestNews.slice(3);
    });
    this.newsService.getOtherNews().subscribe((otherNews:any) => {
      this.otherNews = otherNews.articles;
    });
  }
}

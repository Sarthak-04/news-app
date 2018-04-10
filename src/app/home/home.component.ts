import { Component, OnInit } from '@angular/core';
import { News} from '../news';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  news: News[];
  newsCarousel: News[]; 
  
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getLatestNews();
  }

  getLatestNews(): void {
    this.newsService.getLatestNews().subscribe((news:any) => {
      this.news = news.articles;
      this.newsCarousel = this.news.slice(0,3);
      this.news = this.news.slice(3);
    });
  }
}

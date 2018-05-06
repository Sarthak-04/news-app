import { Component, OnInit } from '@angular/core';
import { News} from '../news';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-technology-news',
  templateUrl: './technology-news.component.html',
  styleUrls: ['./technology-news.component.css']
})
export class TechnologyNewsComponent implements OnInit {

  constructor(private newsService: NewsService) { }

  latestTechNews: News[];
  allTechNews: News[];
  techNewsCarousel: News[]; 
  otherTechNews: News[];
  
  ngOnInit() {
    this.getLatestTechNews();
  }

  getLatestTechNews(): void {
    this.newsService.getLatestTechNews().subscribe((latestTechNews: any) => {
      this.latestTechNews = latestTechNews.articles;
      this.techNewsCarousel = this.latestTechNews.slice(0,3);
      this.latestTechNews = this.latestTechNews.slice(3);
    });
    this.newsService.getOtherTechNews().subscribe((otherTechNews:any) => {
      this.otherTechNews = otherTechNews.articles;
    });
  }
}

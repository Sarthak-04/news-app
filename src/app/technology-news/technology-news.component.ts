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

  ngOnInit() {
    this.getLatestTechNews();
  }

  getLatestTechNews(): void {
    this.newsService.getLatestTechNews().subscribe((latestTechNews: any) => {
      this.latestTechNews = latestTechNews.articles;
    })
  }

}

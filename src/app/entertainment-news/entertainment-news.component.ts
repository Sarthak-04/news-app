import { Component, OnInit } from '@angular/core';
import { News} from '../news';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-entertainment-news',
  templateUrl: './entertainment-news.component.html',
  styleUrls: ['./entertainment-news.component.css']
})
export class EntertainmentNewsComponent implements OnInit {

  latestEntertainmentNews: News[];
  allEntertainmentNews: News[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getLatestEntertainmentNews();
  }

  getLatestEntertainmentNews(): void {
    this.newsService.getLatestEntertainmentNews().subscribe((latestEntertainmentNews: any) => {
      this.latestEntertainmentNews = latestEntertainmentNews.articles;
    })
  }

}

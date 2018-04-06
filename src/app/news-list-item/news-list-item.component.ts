import { Component, OnInit, Input } from '@angular/core';
import { News } from '../news';

@Component({
  selector: 'app-news-list-item',
  templateUrl: './news-list-item.component.html',
  styleUrls: ['./news-list-item.component.css']
})
export class NewsListItemComponent implements OnInit {

  @Input() news: News[];
  /* to use getTime to conver date to string*/
  convertTime (dateString): string {
    let givenTime = new Date(dateString).getTime(),
        currentTime = new Date().getTime(),
        diffInMins: number = (currentTime - givenTime)/60000,
        diffInHours: number = (currentTime - givenTime)/3600000,
        diffInDays: number = (currentTime - givenTime)/86400000;

    if (diffInMins < 60) {
      return Math.floor(diffInMins) + ' mins ago';
    }
    else if (diffInHours < 24) {
      return Math.floor(diffInHours) + ' hrs ago';
    }
    else return Math.floor(diffInDays) + ' day ago';
  }
  
  
  constructor() { }

  ngOnInit() {
  }

}

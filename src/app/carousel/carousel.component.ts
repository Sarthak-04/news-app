import { Component, OnInit, Input } from '@angular/core';
import { News } from '../news';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() news:News[];
  constructor() { }

  ngOnInit() {
  }

  public urlToImage(index: string) : string {
    return this.news[index].urlToImage ? this.news[index].urlToImage : '/assets/images/news.png';
  }
}


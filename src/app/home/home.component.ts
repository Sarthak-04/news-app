import { Component, OnInit } from '@angular/core';
import { News} from '../news';
import { NEWS } from '../mock-news';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  news = NEWS; 
  constructor() { }

  ngOnInit() {
  }

}

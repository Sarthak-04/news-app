import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private _onHomePage: boolean = true;

  public get onHomePage() : boolean {
    return this._onHomePage;
  }

  public set onHomePage(v : boolean) {
    this._onHomePage = v;
  }

  constructor() { }

  setHomePageActive(value: boolean): void {
    this.onHomePage = value;
  }

  ngOnInit() {
  }

}

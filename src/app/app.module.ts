import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewsService } from './news.service';
import { HomeComponent } from './home/home.component';
import { NewsListItemComponent } from './news-list-item/news-list-item.component';
import { TechnologyNewsComponent } from './technology-news/technology-news.component';
import { EntertainmentNewsComponent } from './entertainment-news/entertainment-news.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NewsListItemComponent,
    TechnologyNewsComponent,
    EntertainmentNewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

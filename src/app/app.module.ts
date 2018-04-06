import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewsService } from './news.service';
import { HomeComponent } from './home/home.component';
import { NewsListItemComponent } from './news-list-item/news-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NewsListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

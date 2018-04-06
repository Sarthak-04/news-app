import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TechnologyNewsComponent } from './technology-news/technology-news.component';
import { EntertainmentNewsComponent } from './entertainment-news/entertainment-news.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'technology', component: TechnologyNewsComponent },
  { path: 'entertainment', component: EntertainmentNewsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
  
})
export class AppRoutingModule { }

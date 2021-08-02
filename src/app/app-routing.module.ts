import { SportsNewsComponent } from './components/sports-news/sports-news.component';
import { TechnologyNewsComponent } from './components/technology-news/technology-news.component';
import { TopHeadingComponent } from './components/top-heading/top-heading.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: TopHeadingComponent}, //Home
  {path: 'technology-news', component: TechnologyNewsComponent},
  {path: 'sports-news', component: SportsNewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

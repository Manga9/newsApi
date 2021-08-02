import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeadingComponent } from './components/top-heading/top-heading.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TechnologyNewsComponent } from './components/technology-news/technology-news.component';
import { SportsNewsComponent } from './components/sports-news/sports-news.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeadingComponent,
    NavbarComponent,
    TechnologyNewsComponent,
    SportsNewsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

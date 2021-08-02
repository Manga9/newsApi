import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsAppTopHeadingServiceService } from 'src/app/services/news-app-top-heading-service.service';

@Component({
  selector: 'app-sports-news',
  templateUrl: './sports-news.component.html',
  styleUrls: ['./sports-news.component.scss']
})
export class SportsNewsComponent implements OnInit, OnDestroy {

  sportsNewsDisplay: any = []
  allSportsNews?: Subscription

  constructor(private _topHeadlinesServ: NewsAppTopHeadingServiceService) { }

  ngOnInit(): void {
    this.allSportsNews = this._topHeadlinesServ.sportsNews().subscribe(result => {
      this.sportsNewsDisplay = result.articles
    })
  }

  ngOnDestroy(): void {
    this.allSportsNews?.unsubscribe();
  }

}

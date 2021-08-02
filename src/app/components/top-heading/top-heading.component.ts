import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsAppTopHeadingServiceService } from 'src/app/services/news-app-top-heading-service.service';

@Component({
  selector: 'app-top-heading',
  templateUrl: './top-heading.component.html',
  styleUrls: ['./top-heading.component.scss']
})
export class TopHeadingComponent implements OnInit, OnDestroy {

  topHeadlinesDisplay: any = []
  allHeadlines?: Subscription

  constructor(private _topHeadlinesServ: NewsAppTopHeadingServiceService) { }

  ngOnInit(): void {
    this.allHeadlines = this._topHeadlinesServ.topHeadlines().subscribe(result => {
      this.topHeadlinesDisplay = result.articles
    })
  }

  ngOnDestroy(): void {
    this.allHeadlines?.unsubscribe();
  }

}

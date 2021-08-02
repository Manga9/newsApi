import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsAppTopHeadingServiceService } from 'src/app/services/news-app-top-heading-service.service';

@Component({
  selector: 'app-technology-news',
  templateUrl: './technology-news.component.html',
  styleUrls: ['./technology-news.component.scss']
})
export class TechnologyNewsComponent implements OnInit, OnDestroy {

  techNewsDisplay: any = []
  allTechNews?: Subscription

  constructor(private _topHeadlinesServ: NewsAppTopHeadingServiceService) { }

  ngOnInit(): void {
    this.allTechNews = this._topHeadlinesServ.techNews().subscribe(result => {
      this.techNewsDisplay = result.articles
    })
  }

  ngOnDestroy(): void {
    this.allTechNews?.unsubscribe();
  }
}

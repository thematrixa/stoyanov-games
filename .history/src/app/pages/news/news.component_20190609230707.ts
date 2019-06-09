import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/shared/models/news';
import { NewsService } from 'src/app/shared/services/news-service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newsList: Array<News>;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsList = this.newsService.getNews();
  }

}

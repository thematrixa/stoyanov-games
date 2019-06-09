import { Component, OnInit } from "@angular/core";
import { News } from "src/app/shared/models/news";
import { formatDate } from "@angular/common";
import { NewsService } from "src/app/shared/services/news-service";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"]
})
export class NewsAdminComponent implements OnInit {
  editField: string;
  newsList: Array<News>;

  constructor(private newsService: NewsService) {
    this.newsList = this.newsService.getNews();
  }

  ngOnInit() {}

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.newsList[id][property] = editField;
  }

  remove(id: any) {
    this.newsList.splice(id, 1);
  }

  add() {
    const category = new News();
    this.newsList.unshift(category);
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
}

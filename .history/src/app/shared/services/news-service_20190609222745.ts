import { Injectable } from "@angular/core";
import { Category } from "../models/category";
import { News } from "../models/news";

@Injectable()
export class NewsService {
  news: Array<News> = [
    {
      id: 1,
      title: "New format",
      content:
        "starting tommmorow there will be a new format startingstarting tommmorow there will be a new format starting",
      date: formatDate(new Date(), "dd.MM.yyyy", "en")
    },
    {
      id: 1,
      title: "New format",
      content:
        "starting tommmorow there will be a new format startingstarting tommmorow there will be a new format starting",
      date: formatDate(new Date(), "dd.MM.yyyy", "en")
    }
  ];

  constructor() {}

  getCategories() {
    return this.news;
  }
}

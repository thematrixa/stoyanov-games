import { Injectable } from "@angular/core";
import { Category } from "../models/category";
import { News } from "../models/news";
import { formatDate } from '@angular/common';

@Injectable()
export class NewsService {
  news: Array<News> = [
    {
      id: 2,
      title: "New Rules",
      content:
        "Starting from XX.XX.XXXX there will be a new format in the game involving the brand new Dimensional Summoning.The stupid pendulums XYZ will be banned. Sychros Fusions and Ritual Summoning only. Where will you go now huh? Common,Common run away from here!",
      date: formatDate(new Date(), "dd.MM.yyyy", "en")
    },
    {
      id: 1,
      title: "New Banlist",
      content:
        "Roumor is there will be a new banlist this month so players be on your toes!",
      date: formatDate(new Date(), "dd.MM.yyyy", "en")
    }
  ];

  constructor() {}

  getNews() {
    return this.news;
  }
}

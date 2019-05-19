import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/shared/models/news';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  editField: string;
  newsList: Array<any> = [
    // tslint:disable-next-line:max-line-length
    { id: 1, title: 'New format', content: 'starting tommmorow there will be a new format startingstarting tommmorow there will be a new format starting', date: formatDate(new Date(), 'dd.MM.yyyy', 'en')},
    // tslint:disable-next-line:max-line-length
    { id: 1, title: 'New format', content: 'starting tommmorow there will be a new format startingstarting tommmorow there will be a new format starting', date: formatDate(new Date(), 'dd.MM.yyyy', 'en')},
    // tslint:disable-next-line:max-line-length
    { id: 1, title: 'New format', content: 'starting tommmorow there will be a new format startingstarting tommmorow there will be a new format starting', date: formatDate(new Date(), 'dd.MM.yyyy', 'en')},
    // tslint:disable-next-line:max-line-length
    { id: 1, title: 'New format', content: 'starting tommmorow there will be a new format startingstarting tommmorow there will be a new format starting', date: formatDate(new Date(), 'dd.MM.yyyy', 'en')},

  ];

  constructor() { }

  ngOnInit() {
  }

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

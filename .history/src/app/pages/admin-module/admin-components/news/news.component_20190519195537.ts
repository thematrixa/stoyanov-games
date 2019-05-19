import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/shared/models/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  editField: string;
  newsList: Array<any> = [
    // tslint:disable-next-line:max-line-length
    { id: 1, title: 'New format', content: 'starting tommmorow there will be a new format startingstarting tommmorow there will be a new format starting'},
    // tslint:disable-next-line:max-line-length
    { id: 1, title: 'New format', content: 'starting tommmorow there will be a new format startingstarting tommmorow there will be a new format starting'},
    // tslint:disable-next-line:max-line-length
    { id: 1, title: 'New format', content: 'starting tommmorow there will be a new format startingstarting tommmorow there will be a new format starting'},
    { id: 1, title: 'New format', content: 'starting tommmorow there will be a new format startingstarting tommmorow there will be a new format starting'},

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

  shiftUp(id) {
    if (id === 0) {
      return;
    }
    const temp = this.newsList[id];
    this.newsList[id] = this.newsList[id - 1];
    this.newsList[id - 1] = temp;
  }

  shiftDown(id) {
    if (id === this.newsList.length - 1) {
      return;
    }
    const temp = this.newsList[id];
    this.newsList[id] = this.newsList[id + 1];
    this.newsList[id + 1] = temp;
  }
}

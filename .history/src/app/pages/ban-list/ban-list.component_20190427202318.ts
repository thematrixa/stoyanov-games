import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-ban-list',
  templateUrl: './ban-list.component.html',
  styleUrls: ['./ban-list.component.css']
})
export class BanListComponent implements OnInit {
  allHTML: any;
  limited: any;
  banned: any;
  semiLimited: any;

  constructor(
    private http: HttpClient
  ) {
    const headers = new HttpHeaders().set('Content-Type', 'text');
    const options = {
      headers: headers
    };
    this.http.get('https://www.yugioh-card.com/en/limited/index.html', options)
      .subscribe(data => {
        this.allHTML = data;
      });
  }

  ngOnInit() {

  }

}

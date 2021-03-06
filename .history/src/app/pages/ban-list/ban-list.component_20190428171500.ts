import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-ban-list',
  templateUrl: './ban-list.component.html',
  styleUrls: ['./ban-list.component.css']
})
export class BanListComponent implements OnInit {
  allHTML: new Array()<Object>;
  limited: any;
  banned: any;
  semiLimited: any;

  constructor(
    private http: HttpClient
  ) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {
      headers: headers
    };
    this.http.get('https://db.ygoprodeck.com/api/v4/cardinfo.php?banlist')
      .subscribe(data => {
        console.log(data);
        // this.allHTML = JSON.parse(data.toString());
      });
  }

  ngOnInit() {

  }

}

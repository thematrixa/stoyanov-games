import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CardInfo } from 'src/app/shared/models/card-info';
import { BannedCardFilter } from 'src/app/shared/models/banned-card-filter';
import { BannedCardPipe } from 'src/app/shared/pipes/banned-card';


@Component({
  selector: 'app-ban-list',
  templateUrl: './ban-list.component.html',
  styleUrls: ['./ban-list.component.css']
})
export class BanListComponent implements OnInit {
  allCards: Array<CardInfo>;
  limitedCards: Array<CardInfo>;
  bannedCards: Array<CardInfo>;
  semiLimitedCards: Array<CardInfo>;
  bannedCardFilter: BannedCardFilter = {ban_tcg: 'Limited'};
  bannedCardPipe = new BannedCardPipe();
  constructor(
    private http: HttpClient
  ) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {
      headers: headers
    };
    this.allCards = [];
    this.limitedCards = [];
    this.bannedCards = [];
    this.semiLimitedCards = [];
  }

  ngOnInit() {
    this.http.get('https://db.ygoprodeck.com/api/v4/cardinfo.php?banlist=TCG')
    .subscribe(data => {
      this.allCards = data[0];
      this.sortCards();
    });
  }

  sortCards() {
    this.allCards.sort((a, b) => a.ban_tcg.localeCompare(b.ban_tcg) || a.type.localeCompare(b.type) || a.name.localeCompare(b.name));
  }

}

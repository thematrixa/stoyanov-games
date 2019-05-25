import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-sale',
  templateUrl: './on-sale.component.html',
  styleUrls: ['./on-sale.component.css']
})
export class OnSaleAdminComponent implements OnInit {
  products: Array<any> = [
    // tslint:disable-next-line:max-line-length
    { id: '1', name: 'Structure Deck: Order of the spellcasters', categoryId: '1', onSalePercent: '20'},
    { id: '2', name: 'Structure Deck: Soulburner', categoryId: '1', onSalePercent: '20'},
    { id: '3', name: 'Structure Deck: Rokket', categoryId: '5', onSalePercent: '20'},
    { id: '4', name: 'Structure Deck: SAGA of the Blue-eyes', categoryId: '1', onSalePercent: '20'}
  ];
  editField: string;
  constructor() { }

  ngOnInit() {
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.products[id][property] = editField;
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

}

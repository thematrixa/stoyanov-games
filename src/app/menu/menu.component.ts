import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../shared/services/cart-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() cartTotal: string;
  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

}

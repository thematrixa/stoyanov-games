
import { Component, OnInit, HostListener } from '@angular/core';
import { CartService } from './shared/services/cart-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Stoyanov Games';
  cartTotal:string;

  ngOnInit(): void {
  }

  @HostListener('cartUpdate') onCartUpdated() {
    this.cartTotal = "555";
  }
}

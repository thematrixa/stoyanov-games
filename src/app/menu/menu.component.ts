import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../shared/services/cart-service';
import { TaskTimer } from 'tasktimer';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  cartTotal: string;


  ngOnInit() {
    this.cartTotal = "0.00";
  }

  constructor(private cartService: CartService) {
    const timer = new TaskTimer(500);
    
    timer.on('tick', () => this.updateCartSum(this.cartService.getCartTotal()));
    timer.start();
  }

  updateCartSum(newPrice: string) {
    this.cartTotal = newPrice;
  }

}

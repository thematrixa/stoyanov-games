import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../shared/services/cart-service';
import { TaskTimer } from 'tasktimer';
import { UserService } from '../shared/services/user-service';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  cartTotal: string;
  isLoggedIn: Boolean;
  isAdmin: Boolean;

  ngOnInit() {
    this.cartTotal = "0.00";
  }

  constructor(
    private cartService: CartService,
    private userService: UserService
  ) {
    const timer = new TaskTimer(500);

    timer.on('tick', () => this.updateMenu(this.cartService.getCartTotal(), this.userService.getLoggedUser()));
    timer.start();
  }

  updateMenu(newPrice: string, loggedUser: User) {
    if (loggedUser) {
      this.isLoggedIn = true;
      this.isAdmin = loggedUser.isAdmin;
    } else {
      this.isLoggedIn = false;
      this.isAdmin = false;
    }
    this.cartTotal = newPrice;
  }

}

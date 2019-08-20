import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/shared/models/order';
import { ProductService } from 'src/app/shared/services/product-service';
import { OrderService } from 'src/app/shared/services/orders-service';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user-service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  user: User;
  orders: Array<Order> = [];
  
  constructor(
    private orderService: OrderService,
    private userService: UserService) {
   }

  ngOnInit() {
    this.user = this.userService.getLoggedUser();
    this.orderService.getOrders().subscribe(res => {
      this.orders = this.orderService.getOrdersByUserId(res.response, this.user.id);
      console.log(this.orders);
    },
    error => {
      console.log(error);
    })
  }

  toggleProducts(object: any) {
    object.showProducts = !object.showProducts;
  }
}

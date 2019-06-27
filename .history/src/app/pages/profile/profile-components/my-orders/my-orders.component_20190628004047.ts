import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/shared/models/order';
import { ProductService } from 'src/app/shared/services/product-service';
import { OrderService } from 'src/app/shared/services/orders-service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  @Input() user: User;
  orders: Array<Order> = [];
  
  constructor(private orderService: OrderService) {
    this.orders = orderService.getOrdersByUserId(this.user.Id);
   }



  ngOnInit() {
  }

  toggleProducts(object: any) {
    object.showProducts = !object.showProducts;
  }
}

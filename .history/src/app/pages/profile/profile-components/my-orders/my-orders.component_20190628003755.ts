import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/order';
import { ProductService } from 'src/app/shared/services/product-service';
import { OrderService } from 'src/app/shared/services/orders-service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orders: Array<Order> = [];

  constructor(private orderService: OrderService) {
    this.orders = orderService.getOrdersByUserId();
   }



  ngOnInit() {
  }

  toggleProducts(object: any) {
    object.showProducts = !object.showProducts;
  }
}

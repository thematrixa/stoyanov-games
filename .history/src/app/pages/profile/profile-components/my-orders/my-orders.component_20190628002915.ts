import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orders: Array<Order> = [];

  constructor(private productService: ProductService, private orderService: OrderService) {
    this.orders = orderService.get();
   }



  ngOnInit() {
  }

  toggleProducts(object: any) {
    object.showProducts = !object.showProducts;
  }
}

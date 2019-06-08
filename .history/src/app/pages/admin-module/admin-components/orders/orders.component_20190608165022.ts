import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/order';
import { OrderService } from 'src/app/shared/services/orders-service';
import { ProductService } from 'src/app/shared/services/product-service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersAdminComponent implements OnInit {
  editField: string;
  confirmedOrders: Array<Order> = [];
  shippedOrders: Array<Order> = [];
  unconfirmedOrders: Array<Order> = [];

  constructor(private productService: ProductService, private orderService: OrderService) {
    this.unconfirmedOrders = orderService.getOrders();
   }



  ngOnInit() {
  }

  removeOrder(array: Array<any>, id: any) {
    return array.splice(id, 1)[0];
  }

  confirmOrder(id: any) {
      const confirmedOrder = this.removeOrder(this.unconfirmedOrders, id);
      this.confirmedOrders.push(confirmedOrder);
  }

  shipOrder(id: any) {
    const shippedOrder = this.removeOrder(this.confirmedOrders, id);
    this.shippedOrders.push(shippedOrder);
  }

  deshipOrder(id: any) {
    const shippedOrder = this.removeOrder(this.shippedOrders, id);
    this.confirmedOrders.push(shippedOrder);
  }
  unconfirmOrder(id: any) {
    const confirmedOrder = this.removeOrder(this.confirmedOrders, id);
    this.unconfirmedOrders.push(confirmedOrder);
  }

  toggleProducts(object: any) {
    object.showProducts = !object.showProducts;
  }

  /*sort(fieldName: string) {
    if (fieldName === 'Id') {
      this.products.sort((a, b) => a.id.localeCompare(b.id));
    }
    if (fieldName === 'Name') {
      this.products.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (fieldName === 'Category') {
      this.products.sort((a, b) => a.categoryId.localeCompare(b.categoryId));
    }
    if (fieldName === 'Percent') {
      this.products.sort((a, b) => a.onSalePercent.localeCompare(b.onSalePercent));
    }
  }*/

}


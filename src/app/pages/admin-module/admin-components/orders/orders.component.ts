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
  completedOrders: Array<Order> = [];

  constructor(private productService: ProductService, private orderService: OrderService) {
    this.unconfirmedOrders = orderService.getOrders();
    console.log(this.unconfirmedOrders);
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
  
  completeOrder(id: any) {
    const completedOrder = this.removeOrder(this.shippedOrders, id);
    this.completedOrders.push(completedOrder);
  }

  deshipOrder(id: any) {
    const shippedOrder = this.removeOrder(this.shippedOrders, id);
    this.confirmedOrders.push(shippedOrder);
  }
  decompleteOrder(id: any) {
    const completedOrder = this.removeOrder(this.completedOrders, id);
    this.shippedOrders.push(completedOrder);
  }
  unconfirmOrder(id: any) {
    const confirmedOrder = this.removeOrder(this.confirmedOrders, id);
    this.unconfirmedOrders.push(confirmedOrder);
  }

  toggleProducts(object: any) {
    object.showProducts = !object.showProducts;
  }

 
  sort(fieldName: string,array: Array<any>) {
    if (fieldName === 'Id') {
      array.sort((a, b) => a.id.localeCompare(b.id));
      return;
    }
    if (fieldName === 'Name') {
      array.sort((a, b) => a.name.localeCompare(b.name));
      return;
    }
    if (fieldName === 'Address') {
      array.sort((a, b) => a.address.localeCompare(b.address));
      return;
    }
    if (fieldName === 'Category') {
      array.sort((a, b) => a.categoryId.localeCompare(b.categoryId));
      return;
    }
    if (fieldName === 'Date') {
      array.sort((a, b) => a.date.localeCompare(b.date));
      return;
    }
    if (fieldName === 'Phone') {
      array.sort((a, b) => a.phone.localeCompare(b.phone));
      return;
    }
    if (fieldName === 'Total') {
      this.completedOrders.sort((a, b) => a.total.localeCompare(b.total));
      return;
    }
  }

}


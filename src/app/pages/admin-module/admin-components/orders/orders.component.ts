import { Component, OnInit } from "@angular/core";
import { Order } from "src/app/shared/models/order";
import { OrderService } from "src/app/shared/services/orders-service";
import { ProductService } from "src/app/shared/services/product-service";
import { BackEndService } from 'src/app/shared/services/back-end-service';
import { forkJoin } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { OrderStatusEnum } from 'src/app/shared/enums/order-status-enum';

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.css"]
})
export class OrdersAdminComponent implements OnInit {
  editField: string;
  confirmedOrders: Array<Order> = [];
  shippedOrders: Array<Order> = [];
  unconfirmedOrders: Array<Order> = [];
  completedOrders: Array<Order> = [];

  constructor(
    private orderService: OrderService,
    private toastr: ToastrService,
  ) {
  }

  ngOnInit() {
    let unconfirmed = this.orderService.getUnconfirmedOrders();
    let confirmed = this.orderService.getConfirmedOrders();
    let shipped = this.orderService.getShippedOrders();
    let completed = this.orderService.getCompletedOrders();
    forkJoin(unconfirmed, confirmed, shipped, completed).subscribe(results => {
      this.unconfirmedOrders = results[0].response;
      this.confirmedOrders = results[1].response;
      this.shippedOrders = results[2].response;
      this.completedOrders = results[3].response;
    });
  }

  removeOrder(array: Array<any>, id: any) {
    return array.splice(id, 1)[0];
  }

  confirmOrder(id: any) {
    const confirmedOrder = this.removeOrder(this.unconfirmedOrders, id);
    confirmedOrder.status = OrderStatusEnum.CONFIRMED;
    this.updateOrder(confirmedOrder);
    this.confirmedOrders.push(confirmedOrder);
  }

  shipOrder(id: any) {
    const shippedOrder = this.removeOrder(this.confirmedOrders, id);
    shippedOrder.status = OrderStatusEnum.SHIPPED;
    this.updateOrder(shippedOrder);
    this.shippedOrders.push(shippedOrder);
  }

  completeOrder(id: any) {
    const completedOrder = this.removeOrder(this.shippedOrders, id);
    completedOrder.status = OrderStatusEnum.COMPLETED;
    this.updateOrder(completedOrder);
    this.completedOrders.push(completedOrder);
  }

  deshipOrder(id: any) {
    const deshippedOrder = this.removeOrder(this.shippedOrders, id);
    deshippedOrder.status = OrderStatusEnum.CONFIRMED;
    this.updateOrder(deshippedOrder);
    this.confirmedOrders.push(deshippedOrder);
  }
  decompleteOrder(id: any) {
    const completedOrder = this.removeOrder(this.completedOrders, id);
    completedOrder.status = OrderStatusEnum.SHIPPED;
    this.updateOrder(completedOrder);
    this.shippedOrders.push(completedOrder);
  }
  unconfirmOrder(id: any) {
    const unconfirmedOrder = this.removeOrder(this.confirmedOrders, id);
    unconfirmedOrder.status = OrderStatusEnum.UNCONFIRMED;
    this.updateOrder(unconfirmedOrder);
    this.unconfirmedOrders.push(unconfirmedOrder);
  }

  toggleProducts(object: any) {
    object.showProducts = !object.showProducts;
    console.log(object.showProducts);
    console.log(object);
  }

  sort(fieldName: string, array: Array<any>) {
    if (fieldName === "Id") {
      array.sort((a, b) => a.id.localeCompare(b.id));
      return;
    }
    if (fieldName === "Name") {
      array.sort((a, b) => a.name.localeCompare(b.name));
      return;
    }
    if (fieldName === "Address") {
      array.sort((a, b) => a.address.localeCompare(b.address));
      return;
    }
    if (fieldName === "Category") {
      array.sort((a, b) => a.category.localeCompare(b.category));
      return;
    }
    if (fieldName === "Date") {
      array.sort((a, b) => a.date.localeCompare(b.date));
      return;
    }
    if (fieldName === "Phone") {
      array.sort((a, b) => a.phone.localeCompare(b.phone));
      return;
    }
    if (fieldName === "Total") {
      this.completedOrders.sort((a, b) => a.total-b.total);
      return;
    }
  }

  updateOrder(order: Order) {
    this.orderService.setOrder(order).subscribe(
      (res) => {
        this.toastr.success('Great', 'Upload successfull!');},
      (err: HttpErrorResponse) => {
        console.log(err);
        this.toastr.error('Error', 'Upload failed.Check logs or call administrator!');
      }
    );
  }
}

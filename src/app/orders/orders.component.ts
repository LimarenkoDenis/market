import { CartService } from './../shared/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public orders = [];

  constructor(private _CartService: CartService) { }

  ngOnInit() {
    this.getOrders();
    console.log(this.orders);
  }

  getOrders() {
    this._CartService.getOrders()
      .subscribe(orders => {
        this.orders = orders;
      });
  }

}

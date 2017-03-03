import { CartService } from './../shared/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public orders: Product[] = [];

  public constructor(private _CartService: CartService) { }

  public ngOnInit(): void {
    this.getOrders();
  }

  public getOrders(): void {
    this._CartService.getOrders()
      .subscribe((orders: Product[]) => this.orders = orders);
  }

  public removeItemFromCart(order: Product) {
    this._CartService.removeItem(order);
  }

}

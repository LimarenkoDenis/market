import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CartService {

  public orders = [];

  constructor() { }

  addToCart(product) {
    // if product already exist, then don't push
    let index = this.orders.indexOf(product);
    if (index > -1) {
      return;
    }
    this.orders.push(product);
  }

  getOrders() {
    return Observable.of(this.orders);
  }
}

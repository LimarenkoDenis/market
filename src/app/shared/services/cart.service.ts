import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// TODO work with localStorage

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

  removeItem(order) {
    let index = this.orders.indexOf(order);
    console.log(index);
    if (index > -1) {
      this.orders.splice(index, 1);
    }
  }

  //  fix it
  getCartQuantity() {
    return Observable.of(this.orders.length);
  }
}

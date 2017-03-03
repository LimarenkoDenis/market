import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// TODO work with localStorage

@Injectable()
export class CartService {

  public orders: Product[] = [];

  public constructor() { }

  public addToCart(product: Product) {
    const index: number = this.orders.indexOf(product);
    if (index > -1) {
      return;
    }
    this.orders.push(product);
  }

  public getOrders() {
    return Observable.of(this.orders);
  }

  public removeItem(order) {
    const index: number = this.orders.indexOf(order);
    if (index > -1) {
      this.orders.splice(index, 1);
    }
  }

  //  fix it
  public getCartQuantity(): Observable<number> {
    return Observable.of(this.orders.length);
  }
}

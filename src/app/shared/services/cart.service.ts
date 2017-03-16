import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs';
import { ReplaySubject } from 'rxjs/ReplaySubject';

// TODO work with localStorage

@Injectable()
export class CartService {

  public orders: Product[] = [
    {
      $key: '-string',
      description: 'string',
      name: 'tring',
      price: 23
    }
  ];
  public notebooks$ = Observable.from(this.orders);

  public cardStream$$ = new ReplaySubject(Number.MAX_VALUE);

  public constructor() { }

  public addToCart(product: Product): void {
    const index: number = this.orders.indexOf(product);
    if (index > -1) {
      return;
    }
    this.orders.push(product);
  }

  public getOrders(): Observable<Product[]> {
    return Observable.of(this.orders);
  }

  public removeItem(order: Product): void {
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

import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export class ProductService {

  constructor(private _AngularFire: AngularFire) { }

  getProducts () {
    return this._AngularFire.database.list(`/products`);
  }

  createProduct(product) {
    return this._AngularFire.database.list(`/products`).push(product);
  }
}

import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class ProductService {

  public constructor(private _AngularFire: AngularFire) { }

  public getProducts (): FirebaseListObservable<Product[]> {
    return this._AngularFire.database.list(`/products`);
  }

  public createProduct(product: Product): firebase.database.ThenableReference {
    return this._AngularFire.database.list(`/products`).push(product);
  }

  public getProduct(productId: string): FirebaseObjectObservable<Product> {
    return this._AngularFire.database.object(`/products/${productId}`);
  }
}

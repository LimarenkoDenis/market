import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class ProductService {

  private _angularFire: AngularFire;

  public constructor(_angularFire: AngularFire) {
    this._angularFire = _angularFire;
  }

  public getProducts (): FirebaseListObservable<Product[]> {
    return this._angularFire.database.list(`/products`);
  }

  public createProduct(product: Product): firebase.database.ThenableReference {
    return this._angularFire.database.list(`/products`).push(product);
  }

  public getProduct(productId: string): FirebaseObjectObservable<Product> {
    return this._angularFire.database.object(`/products/${productId}`);
  }
}

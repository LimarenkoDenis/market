import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class ProductService {


  public constructor(
    private _angularFire: AngularFire
  ) {}

  public getProducts (): FirebaseListObservable<Product[]> {
    return this._angularFire.database.list(`/products`);
  }

  public createProduct(product: Product): firebase.database.ThenableReference {
    return this._angularFire.database.list(`/products`).push(product);
  }

  public getProduct(productId: string): FirebaseObjectObservable<Product> {
    return this._angularFire.database.object(`/products/${productId}`);
  }

  public editProduct(product: Product): firebase.Promise<void> {
    // return this._angularFire.database.object(`/products/${product.$key}`).update(product);
    return this._angularFire.database.object(`/products/${product.$key}`).update({
      name: product.name
    });

  }
}

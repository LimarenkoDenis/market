import { ProductService } from './../../shared/services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public product: Product;

  public constructor(
    private _router: ActivatedRoute,
    private _location: Location,
    private  _productService: ProductService
  ) {}

  public ngOnInit(): void {
    this._router.params
      .switchMap((params: Params) => this._productService.getProduct(params['productId']))
      .subscribe((product: Product) => this.product = product);
  }
}

import { ProductService } from './../../shared/services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  public product: FormGroup;

  public constructor(
    private _route: ActivatedRoute,
    private _location: Location,
    private _fb: FormBuilder,
    private _productService: ProductService
  ) {
    this.product = this._fb.group({
      name:         ['', [Validators.required, Validators.minLength(2)]],
      description:  ['', [Validators.required, Validators.minLength(5)]],
      price:        ['', [Validators.required]],
      tags:         [''],
      $key:         ['']
    });
  }

  public ngOnInit(): void {
    this._route.params
      .switchMap((params: Params) => this._productService.getProduct(params['productId']))
      .subscribe((product: Product) => {
        Object.keys(product).forEach((key: string) => {
          if (this.product.controls[key]) {
            this.product.controls[key].setValue(product[key]);
          }
        });
        this.product.controls['$key'].setValue(product.$key);
      });
  }

  public edit(product: FormGroup): void {
    if (product.valid) {
      this._productService.editProduct(product.value);
      this._location.back();
    }
  }

  public cancel(): void {
    this.product.reset();
    this._location.back();
  }
}

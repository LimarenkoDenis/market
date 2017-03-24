import { ProductService } from './../../shared/services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  public product: FormGroup;

  public constructor(
    private _fb: FormBuilder,
    private _productService: ProductService
  ) {}

  public ngOnInit(): void {
    this.product = this._fb.group({
      name:         ['', [Validators.required, Validators.minLength(2)]],
      description:  ['', [Validators.required, Validators.minLength(5)]],
      price:        ['', [Validators.required]],
      tags:         ['']
    });
  }

  public create(product: FormGroup): void {
    if (product.valid) {
      this._productService.createProduct(product.value);
    }
  }

}

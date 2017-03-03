import { ProductService } from './../../shared/services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  public productForm: FormGroup;

  private _fb: FormBuilder;
  private _productService: ProductService;

  public constructor(_fb: FormBuilder, _productService: ProductService) {
    this._fb = _fb;
    this._productService = _productService;
  }

  public ngOnInit(): void {
    this.productForm = this._fb.group({
      name:         ['', [Validators.required, Validators.minLength(2)]],
      description:  ['', [Validators.required, Validators.minLength(5)]],
      price:        ['', [Validators.required]]
    });
  }

  public create({ value, valid }: { value: Product, valid: boolean }): void {
    if (valid) {
      this._productService.createProduct(value);
    }
  }

}

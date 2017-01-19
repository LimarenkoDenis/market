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

  constructor(
    private fb: FormBuilder,
    private _ProductService: ProductService
  ) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      name:         ['', [Validators.required, Validators.minLength(2)]],
      description:  ['', [Validators.required, Validators.minLength(5)]],
      price:        ['', [Validators.required]]
    });
  }

  // add type
  create({ value, valid }: { value, valid: boolean }) {
    console.log(value, valid);
    if (valid) {
      this._ProductService.createProduct(value).catch(error => console.log(error));
      // this.location.back();
    }
  }

}

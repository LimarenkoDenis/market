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
  // type!
  public product;
  public comment = new FormControl('', [Validators.minLength(2)]);

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private _ProductService: ProductService
  ) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this._ProductService.getProduct(params['productId']))
      .subscribe(
        product => this.product = product,
        error => console.log(error)
      );
  }


  addComment() {
    let comment = {
      text: this.comment.value,
      name: 'get from auth',
      avatar: 'auth photo url'
    };

    this.route.params
      .map(params => params['productId'])
      .subscribe(productId => {
        this._ProductService.addComment(productId, comment);
      });
  }
}

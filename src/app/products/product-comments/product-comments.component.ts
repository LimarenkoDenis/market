import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-comments',
  templateUrl: './product-comments.component.html',
  styleUrls: ['./product-comments.component.css']
})
export class ProductCommentsComponent implements OnInit {

  @Input() comments;

  constructor() { }

  ngOnInit() {
    console.log(this.comments);
  }

}

import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  pageTitle:string = "Product List";
  showImage:boolean = true;
  listFilter:string;
  imageWidth:number = 200;
  imageHeight:number = 200;
  products:IProduct[];
  errorMessage:string;

  constructor(private _productService:ProductService){ }

  toggleImage():void{
    this.showImage = !this.showImage;
  }

  ngOnInit():void{
    console.log("<<<<<<---------------------This is Products:Init-------------------------->>>>>>");
    this._productService.getProducts()
      .subscribe(products => this.products = products,
      error => this.errorMessage = <any>error);
  }

  onRatingClicked(message:string):void{
    this.pageTitle += message;
  }
}

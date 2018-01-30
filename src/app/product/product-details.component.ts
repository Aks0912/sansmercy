import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';
import { LocalStorageBagService } from '../services/local-storage-bag.service';
import { AppComponent } from '../app.component';

import { IProduct } from './product';

@Component({
    templateUrl:'./product-details.component.html',
    styleUrls:['./product-details.component.css']
})

export class ProductDetailsComponent{
    products:IProduct[];
    errorMessage:string;
    pId:number;    

    constructor(private _route:ActivatedRoute,
                private _productService:ProductService,
                private _localStorageBag:LocalStorageBagService){

    }

    ngOnInit():void{
        console.log("<<<<<<---------------------This is Product-Details:Init-------------------------->>>>>>");
        let id = this._route.snapshot.params['id'];
        this.pId =id;
        console.log("selected prdId: ", this.pId);
        this._productService.getProductDetails(id)
        .subscribe(products => this.products = products,
        error => this.errorMessage = <any>error);
    }

    addToBag(){
        this._localStorageBag.addItemToBag(this.pId).subscribe((response) => {
            localStorage.setItem('userBag', localStorage.getItem('userBag') + ", " + String(this.pId));
      
            console.log("User Bag: ", localStorage.getItem('userBag'));
          },
            (err) => console.log(err)
          );
    }
}
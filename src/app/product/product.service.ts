import { Http, RequestOptions, Response } from '@angular/http';
import { IProduct } from './product';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class ProductService{
    //private _productUrl= "assets/data/product.json";
    //private _productUrl= "https://ngapi4.herokuapp.com/api/getProducts";
    private _productUrl= "https://still-waters-37303.herokuapp.com/api/getProducts";    
    private _prdDetailsUrl= "https://fierce-spire-13541.herokuapp.com/api/getPrdDetails";

    constructor(private _http:Http){

    }

    getProducts():Observable<IProduct[]>{
        return this._http.get(this._productUrl)
                        .map((response:Response)=> <IProduct[]>response.json())
                        .catch(this.handleError);
    }

    getProductDetails(productId:number):Observable<IProduct[]>{
        let apiURL = `${this._prdDetailsUrl}/${productId}`;
        return this._http.get(apiURL)
                        .map((response:Response)=> <IProduct[]>response.json())
                        .catch(this.handleError);
    }


    private handleError(error:Response){
        return Observable.throw(error.json().error || "Server Error!");
    }
}
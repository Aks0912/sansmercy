import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class LocalStorageBagService {

  constructor(private _http:Http) { 
  }

  private extractData(res:Response){
    let body = res.json();
    return body.fields || {}
  }

   private handleError(error:any){
        return Observable.throw(error.statusText);
   }

  addItemToBag(data):Observable<any>{
      console.log("going to add product Id: ", data);

      return this._http.post('http://localhost:3100/postUser', data)
  }
}

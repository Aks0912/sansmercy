import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable'

import { User } from '../models/user.model';

@Injectable()

export class RegisterUserService{
    constructor(private _http:Http){}

    private extractData(res:Response){
        let body = res.json();
        return body.fields || {}
    }

    private handleError(error:any){
        return Observable.throw(error.statusText);
    }

    postUser(user:User):Observable<any>{
        console.log("Posting user to service", user);

        let body = JSON.stringify(user);
        let headers = new Headers({'content-type':'application/json'});
        let options = new RequestOptions({headers:headers});

        return this._http.post('http://localhost:3100/postUser', body, options)
                    .map(this.extractData)
                    .catch(this.handleError)
    }
}
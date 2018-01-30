import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user.model';
import { RegisterUserService } from '../services/register-user.service';

@Component({
    templateUrl:'./registration.component.html',
    styleUrls:['./registration.component.css']
})

export class RegistrationComponent{

    constructor(private _registerUser:RegisterUserService){}

    ngOnInit() {
    }

    roles = ["Customer", "Vendor", "Distributer"];
    model = new User("Firstname", "Lastname", "","email@mail.com", "password", "password", 9999999999, "default", false)

    firstToUpper(value:string){
        if(value.length > 0)
          this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
        else
          this.model.firstName = value;
      }

    submitForm(form:NgForm){
        console.log('submitForm: ', form.value);
        
        this._registerUser.postUser(this.model).
            subscribe(
                data=> console.log('success', data),
                err=> console.log('error', err)
            )
        }
    }
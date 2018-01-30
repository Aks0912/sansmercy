import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user-login.service';

@Component({
    selector:'app-login',
    templateUrl:'./cust-login.component.html',
    styleUrls:['./cust-login.component.css']
})

export class CustLoginComponent{
    constructor(private router:Router, private user:UserService) { }
    
      ngOnInit() {
      }
    
      loginUser(e){
        let username = e.target.elements[0].value;
        let password = e.target.elements[1].value;
    
        console.log(username, password);
    
        if(username === 'admin' && password === 'admin'){
          this.user.setUserLoggedIn();
          this.router.navigate(['/mybag']);
        }
    
        return false;
      }
}
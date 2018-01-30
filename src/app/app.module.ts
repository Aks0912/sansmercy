/*import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './shared/notFound.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { ProductService } from './product/product.service';
import { StarComponent } from './shared/star.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { ProductDetailsComponent } from './product/product-details.component';
import { ProductDetailsFilterPipe } from './product/product-details-filter.pipes';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductFilterPipe,
    StarComponent,
    OrderComponent,
    HomeComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    ProductDetailsFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'products', component:ProductComponent},
      {path:'product/:id', component:ProductDetailsComponent},
      {path:'orders', component:OrderComponent},
      {path:'home', component:HomeComponent},
      {path:'', redirectTo:'home', pathMatch:'full'},
      {path:'**', component:NotFoundComponent}
    ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { } */


import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';

import { NotFoundComponent } from './shared/notFound.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
//import { StarComponent } from './shared/star.component';
import { ProductModule } from './product/product.module';
import { RegistrationModule } from './registration/registration.module';
import { CustBagModule } from './cust-bag/cust-bag.module';
import { UserService } from './services/user-login.service';
import { AuthGuard } from './guards/auth.guard';
import { LocalStorageBagService } from './services/local-storage-bag.service';
import { RegisterUserService } from './services/register-user.service';
import { UserBagComponent } from './shared/user-bag/user-bag.component';

@NgModule({
  declarations: [
    AppComponent,    
    //StarComponent,
    OrderComponent,
    HomeComponent,
    NotFoundComponent,
    UserBagComponent
  ],
  imports: [
    BrowserModule,
    ProductModule,
    RegistrationModule,
    CustBagModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'orders', component:OrderComponent},
      {path:'home', component:HomeComponent},
      {path:'', redirectTo:'home', pathMatch:'full'},
      {path:'**', component:NotFoundComponent}
    ])
  ],
  providers: [UserService, AuthGuard, LocalStorageBagService, RegisterUserService],
  bootstrap: [AppComponent]
})
export class AppModule { } 

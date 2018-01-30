import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '../guards/auth.guard';

import { CustBagComponent } from './cust-bag.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'mybag', 
      canActivate: [AuthGuard],
      component:CustBagComponent}
  ])
  ],
  declarations: [
    CustBagComponent
  ]
})
export class CustBagModule { }

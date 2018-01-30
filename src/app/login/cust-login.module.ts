import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CustLoginComponent } from './cust-login.component';
import { MatComponentModule } from '../shared/mat-component.module'

@NgModule({
    declarations: [
        CustLoginComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        MatComponentModule,
        RouterModule.forChild([
            {path:'login', component:CustLoginComponent}
        ])
    ],
    exports: [ CustLoginComponent ],
    providers: []
})

export class CustLoginModule{

}
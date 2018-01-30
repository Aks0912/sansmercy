import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RegistrationComponent } from './registration.component';
import { MatComponentModule } from '../shared/mat-component.module'
import { CustLoginModule } from '../login/cust-login.module';

@NgModule({
    declarations: [
        RegistrationComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        CustLoginModule,
        MatComponentModule,
        RouterModule.forChild([
            {path:'register', component:RegistrationComponent}
        ])
    ],
    exports: [ RegistrationComponent ],
    providers: []
})

export class RegistrationModule{

}
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './product.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductDetailsComponent } from './product-details.component';
import { ProductDetailsFilterPipe } from './product-details-filter.pipes';
import { ProductService } from './product.service';
import { StarComponent } from '../shared/star.component';
import { TestComponent } from '../shared/test/test.component';

@NgModule({
    declarations: [
        ProductComponent,
        ProductFilterPipe,
        ProductDetailsComponent,
        ProductDetailsFilterPipe,
        StarComponent,
        TestComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            {path:'products', component:ProductComponent},
            {path:'product/:id', component:ProductDetailsComponent}
        ])
    ],
    exports: [ ProductComponent ],
    providers: [ProductService]
})

export class ProductModule{

}
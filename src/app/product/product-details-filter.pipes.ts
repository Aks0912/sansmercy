import { filter } from 'rxjs/operators';
import { IProduct } from './product';
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: "productDetailsFilter"
})

export class ProductDetailsFilterPipe implements PipeTransform{
    transform(value:IProduct[], filterBy:number){   
        console.log(value); 
        console.log("Selected product Id: " + filterBy);
        
        return filterBy? value.filter((product:IProduct)=>
        product.ProductId === filterBy):null;
    }
}
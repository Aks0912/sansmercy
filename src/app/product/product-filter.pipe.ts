import { IProduct } from './product';
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: "productFilter"
})

export class ProductFilterPipe implements PipeTransform{
    transform(value:IProduct[], filterBy:string){        
        filterBy = filterBy?filterBy.toLowerCase():null;
        return filterBy? value.filter((product:IProduct)=>
        product.ProductName.toLowerCase().indexOf(filterBy) !== -1):value;
    }
}
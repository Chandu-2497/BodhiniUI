import { Pipe,PipeTransform } from '@angular/core';

@Pipe({name:'capitalize'})
export class Capitalize implements PipeTransform{
    transform(value: any, ...args: any[]) {
        if(value.length > 3)
        return value.substring(0,5).toUpperCase() ;
        // throw new Error("Method not implemented.");
    }

}
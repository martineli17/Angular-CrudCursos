import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: "replace"})
export class ReplacePipe implements PipeTransform{
    transform(value: string, replace: string, newValue: string){
        return value.replace(replace, newValue);
    }
}
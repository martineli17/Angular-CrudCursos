import {Component, Input, OnChanges} from '@angular/core';

@Component({
    selector: "app-star",
    templateUrl: "./star.component.html",
})

export class StarComponent implements OnChanges{
    @Input()
    rating?:number = 0;

    width: number = 0;
    ngOnChanges(){
        this.width = (this.rating ?? 0) * 74 / 5
    }
}
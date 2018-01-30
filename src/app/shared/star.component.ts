import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'edureka-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
  })

export class StarComponent implements OnChanges{
    @Input() rating:number;
    starWidth:number;
    @Output() ratingClicked:EventEmitter<string>=new EventEmitter<string>();

    ngOnChanges():void{
        this.starWidth = this.rating*86/5;
    }

    starClick():void{
        console.log("this is hell");
        this.ratingClicked.emit(`The rating clicked is: ${this.rating}`);
    }
}
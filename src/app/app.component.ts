import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itemCount:number = 0;

  ngOnInit():void{
    console.log("<<<<<<---------------------This is App-Component:Init-------------------------->>>>>>");
       
    let arr = localStorage.getItem('userBag').split(',');
    console.log(arr);

    this.itemCount = arr.length - 1;
  }
}

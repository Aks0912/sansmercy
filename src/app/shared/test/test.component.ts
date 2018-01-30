import { Component, OnInit } from '@angular/core';
import { LocalStorageBagService } from '../../services/local-storage-bag.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private _localStorageBag:LocalStorageBagService) { }

  ngOnInit() {
  }

  addToBag(prd){
    this._localStorageBag.addItemToBag(prd).subscribe((response) => {
      localStorage.setItem('userBag', localStorage.getItem('userBag') + ", " + String(prd));

      console.log("User Bag: ", localStorage.getItem('userBag'));
    },
      (err) => console.log(err)
    );
  }
}

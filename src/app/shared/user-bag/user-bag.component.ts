import { Component, OnInit } from '@angular/core';
import { LocalStorageBagService } from '../../services/local-storage-bag.service'

@Component({
  selector: 'app-user-bag',
  templateUrl: './user-bag.component.html',
  styleUrls: ['./user-bag.component.css']
})
export class UserBagComponent implements OnInit {

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

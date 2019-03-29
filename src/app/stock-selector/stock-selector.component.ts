import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-selector',
  templateUrl: './stock-selector.component.html',
  styleUrls: ['./stock-selector.component.css']
})
export class StockSelectorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  switchToFundaMental() {
    console.log('in fundanmental component');
    console.log('This should also route to fundamental page automatically. Need to implement this.')
  }

}

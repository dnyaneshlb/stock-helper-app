import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fundamental',
  templateUrl: './fundamental.component.html',
  styleUrls: ['./fundamental.component.css']
})
export class FundamentalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  formatSliderLabel(value: string | null){
    if (!value) {
      return '0%';
    }
    return value + '%';
  }

}

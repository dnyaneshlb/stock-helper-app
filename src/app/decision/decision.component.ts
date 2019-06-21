import { CommonService } from './../services/common.service';
import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material';

@Component({
  selector: 'app-decision',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.css']
})
export class DecisionComponent implements OnInit {

  constructor(private commonService: CommonService) {
    this.fanswered = this.commonService.noOfFundamentalQuestionsAnswered;
    this.tanswered = this.commonService.noOfTechnicalQuestionsAnswered;
    this.totalFundamentalquestions = this.commonService.totalFundamentalquestions;
    this.totalTechnicalquestions = this.commonService.totalTechnicalquestions;
   }

  fanswered = 0;
  tanswered = 0;
  totalFundamentalquestions = 0;
  totalTechnicalquestions = 0;
  advisedRiskCapital = 20;

  ngOnInit() {
  }

  getFundamentalResultBackground() {
    if (this.fanswered > 5) {
      return '#4CAF50';
    }
    return '#FF5252';
  }

  getTechnicalResultBackground() {
    if (this.tanswered > 5) {
      return '#4CAF50';
    }
    return '#FF5252';
  }

  formatCapitalSliderLabel(value: number | null){
    if (!value) {
      return '0';
    }

    if (value > 100) {
      return Math.round(value / 100) + 'L';
    } else {
      return value + 'k';
    }
  }

  manageRisk(event: MatSliderChange | null) : void {
    console.log('manage risk'+ event.value);
    let capital: number = event.value;
    this.advisedRiskCapital = Math.round(capital / 5) ;
  }

}

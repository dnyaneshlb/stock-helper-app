import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  public isFirstTimeUser = true;
  public likes = 0;
  public noOfFundamentalQuestionsAnswered = 1;
  public noOfTechnicalQuestionsAnswered = 0;
  public totalFundamentalquestions = 20;
  public totalTechnicalquestions = 15;
}

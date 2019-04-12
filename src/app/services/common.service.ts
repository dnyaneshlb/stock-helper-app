import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  public isFirstTimeUser = true;
  public likes = 0;
  public noOfFundamentalQuestionsAnswered = 10;
  public noOfTechnicalQuestionsAnswered =10;
  public totalFundamentalquestions = 20;
  public totalTechnicalquestions = 15;
}

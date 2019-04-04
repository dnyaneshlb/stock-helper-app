import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-technical',
  templateUrl: './technical.component.html',
  styleUrls: ['./technical.component.css']
})
export class TechnicalComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  name = 'Angular';
  today = new Date();
  price = 10;

  ngOnInit() {
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open('Technical Analysis Completed', 'Ok', {
      duration : 3000,
      verticalPosition : 'bottom',
      horizontalPosition : 'center'
    });
  }


  goToDecision() {
    
  }

}

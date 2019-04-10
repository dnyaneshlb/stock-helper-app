import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  templateUrl: './app-intro.component.html',
  styleUrls: ['./app-intro.component.css']
})
export class AppIntroComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AppIntroComponent>,
    // tslint:disable-next-line: align
    @Inject(MAT_DIALOG_DATA) public data: null ) { }

  ngOnInit() {
  }

}

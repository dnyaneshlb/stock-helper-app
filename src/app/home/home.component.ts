import { CommonService } from './../services/common.service';
import { AppIntroComponent } from './../app-intro/app-intro.component';
import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog, public commonService: CommonService) {}

  ngOnInit() {
    if (this.commonService.isFirstTimeUser) {
      const dialogRef = this.dialog.open(AppIntroComponent, {
        width: '350px',
        data: {name: 'My App'}
      });

      this.commonService.isFirstTimeUser = false;
    }
  }
}



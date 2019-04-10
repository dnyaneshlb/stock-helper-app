import { CommonService } from './../services/common.service';
import { MatSnackBar } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  likes = 0;

  constructor(private snackBar: MatSnackBar, private commonService: CommonService) { }

  mylikes = this.commonService.likes;

  ngOnInit() {
    // this.likes = some http call to fetch likes
  }

  navigateToGit() {
    window.open('https://github.com/dnyaneshlb', '_blank');
  }

  likeplus() {
    this.commonService.likes++;
    this.mylikes++;
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open('Liked', 'Done', {
      duration : 500,
      verticalPosition : 'bottom',
      horizontalPosition : 'center'
    });
  }
}

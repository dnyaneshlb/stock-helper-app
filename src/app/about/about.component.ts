import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  likes = 0;

  constructor() { }

  ngOnInit() {
    // this.likes = some http call to fetch likes
  }

  navigateToGit() {
    window.open('https://github.com/dnyaneshlb', '_blank');
  }

  likeplus() {
    this.likes++;
  }

}

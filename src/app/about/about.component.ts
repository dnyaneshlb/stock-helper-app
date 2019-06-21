import { CommonService } from './../services/common.service';
import { MatSnackBar } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  likes = 0;

  constructor(private snackBar: MatSnackBar, private commonService: CommonService, private http: HttpClient) { }

  mylikes = this.commonService.likes;

  ngOnInit() {
    // this.likes = some http call to fetch likes
  }

  navigateToGit() {
    /* without error handling */
    this.http.get('https://api.github.com/users/dnyaneshlb').subscribe( response => console.log(response));


    /* with error handling */
    this.http.get('https://api.github.com/users/dnyaneshlb').subscribe(
        response => console.log(response),
        error => console.log('Error occured while getting response from server : ' + error)
    );

    /* error handling with pipe */
    this.http.get('https://api.github.com/users/dnyaneshlb').pipe(retry(3), catchError(this.handleError));

    window.open('https://github.com/dnyaneshlb', '_blank');
  }

  privatelikeplus() {
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


  private handleError(error: HttpErrorResponse){
    console.error('Internal Server Error');
    return throwError('some problem with site.');
  }
}

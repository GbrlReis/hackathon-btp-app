import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router) {

  }

  goToCertificates(){
  	this.router.navigate(['CertificatesPage']);
  };

  goToTrainings(){
  	this.router.navigate(['TrainingsPage']);
  };

  goToVideoLessons(){
    this.router.navigate(['VideoLessonsPage']);
  }

}

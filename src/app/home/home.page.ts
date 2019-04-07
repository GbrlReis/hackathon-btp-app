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
  	this.router.navigate(['/certificates']);
  };

  goToTrainings(){
  	this.router.navigate(['/trainings']);
  };

  goToVideoLessons(){
    this.router.navigate(['/video-lessons']);
  }

}

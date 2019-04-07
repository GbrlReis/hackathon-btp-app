import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../activities.service'

import * as moment from 'moment';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.page.html',
  styleUrls: ['./trainings.page.scss'],
})
export class TrainingsPage implements OnInit {

  nextTrainings:any = [];
  pastTrainings:any = [];

  constructor(private activitiesService: ActivitiesService) {
    activitiesService.getTrainings()
  		.subscribe((training) => {
  			this.nextTrainings = training.filter(training => moment(training.date).toDate() >= moment().startOf('day').toDate());
      })
    
    activitiesService.getTrainings()
  		.subscribe((training) => {
  			this.pastTrainings = training.filter(training => moment(training.date).isBefore(moment().startOf('day')));
  		})
  }

  ngOnInit() {
  }

}

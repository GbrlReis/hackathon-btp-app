import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../activities.service'

import * as moment from 'moment';


@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.page.html',
  styleUrls: ['./certificates.page.scss'],
})
export class CertificatesPage implements OnInit {

  nextCertifications:any = [];
  pastCertifications:any = [];

  constructor(private activitiesService: ActivitiesService) {
    activitiesService.getCertifications()
  		.subscribe((certifications) => {
  			this.nextCertifications = certifications.filter(certificate => moment(certificate.date).toDate() >= moment().startOf('day').toDate());
      })
    
    activitiesService.getCertifications()
  		.subscribe((certifications) => {
  			this.pastCertifications = certifications.filter(certificate => moment(certificate.date).isBefore(moment().startOf('day')));
  		})

  }

  ngOnInit() {
  }

}

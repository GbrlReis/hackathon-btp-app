import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../activities.service'

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.page.html',
  styleUrls: ['./certificates.page.scss'],
})
export class CertificatesPage implements OnInit {

  certifications:any = [];

  constructor(private activitiesService: ActivitiesService) {
    activitiesService.getCertifications()
  		.subscribe((certifications) => {
  			console.log('certifications', certifications);
  			this.certifications = certifications;
  		})

  }

  ngOnInit() {
  }

}

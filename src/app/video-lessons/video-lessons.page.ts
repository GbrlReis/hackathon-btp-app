import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../activities.service'
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-lessons',
  templateUrl: './video-lessons.page.html',
  styleUrls: ['./video-lessons.page.scss'],
})
export class VideoLessonsPage implements OnInit {

  videoLessons:any = [];
  youtubeUrl:string = 'https://www.youtube.com/embed/gsjy1hbyF_8';

  constructor(private activitiesService: ActivitiesService, public sanitizer: DomSanitizer) {
    activitiesService.getVideoLessons()
  		.subscribe((videoLessons) => {
        console.log(videoLessons)
  			this.videoLessons = videoLessons;
      })
  }

  ngOnInit() {
  }

  selectVideoLesson(videoLesson){
    this.youtubeUrl = videoLesson.link;
  }

}

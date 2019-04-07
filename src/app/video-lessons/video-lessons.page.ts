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
  videoLessonUrl:string = '';
  videoLessonTitle:string = '';
  videoLessonDescription:string = '';
  showVideoLessonDescription:boolean = false;

  constructor(private activitiesService: ActivitiesService, public sanitizer: DomSanitizer) {
    activitiesService.getVideoLessons()
  		.subscribe((videoLessons) => {
        this.videoLessons = videoLessons;
        this.selectVideoLesson(videoLessons[0]);
      })
  }

  ngOnInit() {
  }

  selectVideoLesson(videoLesson){
    this.videoLessonUrl = videoLesson.link;
    this.videoLessonTitle = videoLesson.title;
    this.videoLessonDescription = videoLesson.description;
  }

  toggleVideoLessonDescription(){
    this.showVideoLessonDescription = !this.showVideoLessonDescription;
  }

}

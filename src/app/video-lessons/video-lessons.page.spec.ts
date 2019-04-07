import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoLessonsPage } from './video-lessons.page';

describe('VideoLessonsPage', () => {
  let component: VideoLessonsPage;
  let fixture: ComponentFixture<VideoLessonsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoLessonsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoLessonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

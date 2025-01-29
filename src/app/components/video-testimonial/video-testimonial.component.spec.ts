import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTestimonialComponent } from './video-testimonial.component';

describe('VideoTestimonialComponent', () => {
  let component: VideoTestimonialComponent;
  let fixture: ComponentFixture<VideoTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoTestimonialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

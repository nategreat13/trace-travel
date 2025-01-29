import { Component, input } from '@angular/core';
import { VideoTestimonial } from '../../model/videoTestimonial.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video-testimonial',
  imports: [],
  templateUrl: './video-testimonial.component.html',
  styleUrl: './video-testimonial.component.css',
})
export class VideoTestimonialComponent {
  testimonial = input.required<VideoTestimonial>();
}

import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideoTestimonialComponent } from '../video-testimonial/video-testimonial.component';
import { VideoTestimonial } from '../../model/videoTestimonial.type';

@Component({
  selector: 'app-video-testimonials',
  imports: [CommonModule, VideoTestimonialComponent],
  templateUrl: './video-testimonials.component.html',
  styleUrl: './video-testimonials.component.css',
})
export class VideoTestimonialsComponent {
  testimonials = signal<VideoTestimonial[]>([]);

  constructor(private sanitizer: DomSanitizer) {
    this.testimonials.set([
      {
        amountSavedString: '$500 Saved',
        name: 'Cecilia L.',
        quote: `"I recently took my family to Italy for insanely cheap. It was like $400 roundtrip out of California, all because of Trace! I seriously couldn't believe how much money they saved me and my family just on one trip."`,
        videoURL: this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://player.vimeo.com/video/960882910?title=0&amp;byline=0&amp;portrait=0&amp;pip=0'
        ),
        posterUrl:
          'https://storage.googleapis.com/embarckstravel.appspot.com/Video%20Testimonials/Elizabeth.jpeg',
      },
      {
        amountSavedString: '$800 Saved',
        name: 'Connor S.',
        quote: `"I was able to take my wife to Paris for $350 roundtrip cause of Trace! We've loved all the deals we get almost on a daily basis and it's honestly a no brainer, especially considering how cheap it is!"`,
        videoURL: this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://player.vimeo.com/video/960882867?title=0&byline=0&portrait=0&pip=0'
        ),
        posterUrl:
          'https://storage.googleapis.com/embarckstravel.appspot.com/Video%20Testimonials/Connor.jpeg',
      },
      {
        amountSavedString: '$900 Saved',
        name: 'Anna C.',
        quote: `"Officially the best flight deal service ever! We paid $400 per person roundtrip to Norway from LAX which I am super excited about!"`,
        videoURL: this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://player.vimeo.com/video/960882811?title=0&byline=0&portrait=0&pip=0'
        ),
        posterUrl:
          'https://storage.googleapis.com/embarckstravel.appspot.com/Video%20Testimonials/Anna.jpeg',
      },
    ]);
  }
}

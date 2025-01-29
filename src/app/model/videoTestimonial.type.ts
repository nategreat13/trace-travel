import { SafeResourceUrl } from '@angular/platform-browser';

export type VideoTestimonial = {
  videoURL: SafeResourceUrl;
  quote: string;
  name: string;
  amountSavedString: string;
  posterUrl: string;
};

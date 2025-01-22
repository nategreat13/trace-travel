import { Component, signal } from '@angular/core';
import { FaqCardComponent } from '../faq-card/faq-card.component';
import { FAQS } from '../../constants/faqs.constants';

@Component({
  selector: 'app-faq',
  imports: [FaqCardComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FaqComponent {
  FAQS = signal(FAQS);
}

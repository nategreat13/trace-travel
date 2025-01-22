import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-faq-card',
  imports: [],
  templateUrl: './faq-card.component.html',
  styleUrl: './faq-card.component.css',
})
export class FaqCardComponent {
  title = input.required();
  body = input.required();
  isExpanded = signal(false);
  toggleExpanded() {
    this.isExpanded.update((a) => !a);
  }
}

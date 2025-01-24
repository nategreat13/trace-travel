import {
  Component,
  EventEmitter,
  OnDestroy,
  Output,
  signal,
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-premium-popup',
  imports: [MatIcon, CommonModule, RouterLink],
  templateUrl: './premium-popup.component.html',
  styleUrl: './premium-popup.component.css',
  animations: [
    trigger('slideAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate(
          '300ms ease-out',
          style({ transform: 'translateX(0)', opacity: 1 })
        ),
      ]),
      transition(':leave', [
        animate(
          '300ms ease-in',
          style({ transform: 'translateX(-100%)', opacity: 0 })
        ),
      ]),
    ]),
  ],
})
export class PremiumPopupComponent implements OnDestroy {
  currentIndex = signal(0);
  currentPage = signal(0);
  private intervalId: any;
  items: {
    imageUrl: string;
    destination: string;
    subtitle: string;
    quote: string;
    testimonialImageUrl: string;
    tesimonialName: string;
    normalPriceString: string;
    dealPriceString: string;
  }[] = [
    {
      imageUrl: '/assets/sydney.jpeg',
      dealPriceString: '$1,800',
      destination: 'Sydney, Australia',
      normalPriceString: '$4,800',
      quote:
        "We couldn't believe the mistake fare deal to Sydney! I love starting my day by seeing what new flights are available around the world!",
      subtitle: 'Saved over $3,000',
      tesimonialName: 'Sarah K.',
      testimonialImageUrl: '/assets/sydney-testimonial.jpg',
    },
    {
      imageUrl: '/assets/paris.jpeg',
      dealPriceString: '$1,600',
      destination: 'Paris, France',
      normalPriceString: '$2,800',
      quote:
        'Trace made our honeymoon in Paris unforgettable with an affordable business class deal. Highly recommend!',
      subtitle: 'Saved over $1,200',
      tesimonialName: 'Steven N.',
      testimonialImageUrl: '/assets/paris-testimonial.jpg',
    },
    {
      imageUrl: '/assets/tokyo.jpeg',
      dealPriceString: '$1,100',
      destination: 'Tokyo, Japan',
      normalPriceString: '$3,200',
      quote:
        "Upgrading was the best decision! Thanks to Trace, we traveled in luxury to Tokyo with an amazing airline I never would've discovered on my own.",
      subtitle: 'Saved over $2,100',
      tesimonialName: 'Lisa M.',
      testimonialImageUrl: '/assets/tokyo-testimonial.jpg',
    },
  ];

  @Output() onClose = new EventEmitter<null>();

  onOverLayClick() {
    this.onClose.emit();
  }

  get transform(): string {
    return `translateX(-${(this.currentIndex() * 100) / this.items.length}%)`;
  }
  trapScroll(event: WheelEvent): void {
    const target = event.currentTarget as HTMLElement;

    const atTop = target.scrollTop === 0 && event.deltaY < 0;
    const atBottom =
      target.scrollTop + target.clientHeight >= target.scrollHeight &&
      event.deltaY > 0;

    if (atTop || atBottom) {
      // Prevent the scroll event from propagating beyond the modal
      event.preventDefault();
    }
  }

  onButtonClick() {
    if (this.currentPage() === 1) {
    } else {
      this.currentPage.set(1);
    }
  }

  constructor() {
    this.intervalId = setInterval(() => {
      this.currentIndex.set((this.currentIndex() + 1) % this.items.length);
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}

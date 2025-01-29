import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { CoreDataService } from '../../services/user/coreData.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-payment-cards',
  imports: [CommonModule, RouterModule],
  templateUrl: './payment-cards.component.html',
  styleUrl: './payment-cards.component.css',
})
export class PaymentCardsComponent {
  cards = signal<
    {
      percent: number;
      title: string;
      subtitle: string;
      normalPriceUSD: number;
      priceUSD: number;
      style: 'orange' | 'blue';
    }[]
  >([]);

  constructor(private coreDataService: CoreDataService) {
    this.cards.set([
      // {
      //   normalPriceUSD: 8,
      //   priceUSD: 6,
      //   title: 'Monthly Premium',
      //   percent: 25,
      //   style: 'orange',
      //   subtitle: `${this.coreDataService.get().trialDays} Day Free Trial`,
      // },
      {
        normalPriceUSD: 8,
        priceUSD: 5,
        title: 'Premium',
        percent: 38,
        style: 'blue',
        subtitle: `${this.coreDataService.get().trialDays} Day Free Trial`,
      },
    ]);
  }
}

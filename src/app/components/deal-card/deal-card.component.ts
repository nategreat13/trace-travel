import { Component, input } from '@angular/core';
import { Deal } from '../../model/deal.type';

@Component({
  selector: 'app-deal-card',
  imports: [],
  templateUrl: './deal-card.component.html',
  styleUrl: './deal-card.component.css',
})
export class DealCardComponent {
  deal = input.required<Deal>();
}

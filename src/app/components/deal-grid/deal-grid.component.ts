import { Component, input } from '@angular/core';
import { Deal } from '../../model/deal.type';
import { DealCardComponent } from '../deal-card/deal-card.component';

@Component({
  selector: 'app-deal-grid',
  imports: [DealCardComponent],
  templateUrl: './deal-grid.component.html',
  styleUrl: './deal-grid.component.css',
})
export class DealGridComponent {
  deals = input.required<Deal[]>();
}

import { Component } from '@angular/core';
import { FaqComponent } from '../../components/faq/faq.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FaqCardComponent } from '../../components/faq-card/faq-card.component';
import { BlueHeaderComponent } from '../../components/blue-header/blue-header.component';

@Component({
  selector: 'app-faqs',
  imports: [NavbarComponent, FaqComponent, BlueHeaderComponent],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css',
})
export class FaqsComponent {}

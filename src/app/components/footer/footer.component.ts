import { Component, signal } from '@angular/core';
import { FooterSocialRowComponent } from '../footer-social-row/footer-social-row.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [FooterSocialRowComponent, CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  footerLinks = signal<{ title: string; routerLink: string }[]>([
    {
      title: 'Premium',
      routerLink: '/premium',
    },
    {
      title: 'Who We Are',
      routerLink: '/who-we-are',
    },
    {
      title: 'Success Stories',
      routerLink: '/success-stories',
    },
    {
      title: 'Journal',
      routerLink: '/journal',
    },
    {
      title: 'Affiliate',
      routerLink: '/affiliate',
    },
    {
      title: 'FAQs',
      routerLink: '/faqs',
    },
    {
      title: 'Partnerships',
      routerLink: '/partnerships',
    },
    {
      title: 'Terms And Conditions',
      routerLink: '/terms-and-conditions',
    },
    {
      title: 'Privacy Policy',
      routerLink: '/privacy-policy',
    },
    {
      title: 'Contact',
      routerLink: '/contact',
    },
  ]);
}

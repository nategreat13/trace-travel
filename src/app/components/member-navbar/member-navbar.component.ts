import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-member-navbar',
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './member-navbar.component.html',
  styleUrl: './member-navbar.component.css',
})
export class MemberNavbarComponent {
  constructor(private router: Router) {}

  isActive(tab: any): boolean {
    return this.router.url === tab.routerLink;
  }

  tabs = signal<
    {
      whiteUrl: string;
      blueUrl: string;
      text: string;
      routerLink: string;
    }[]
  >([
    {
      text: 'Your Deals',
      whiteUrl: '/assets/your-deals-white.svg',
      blueUrl: '/assets/your-deals-blue.svg',
      routerLink: '/member/your-deals',
    },
    {
      text: 'Explore',
      whiteUrl: '/assets/explore-white.svg',
      blueUrl: '/assets/explore-blue.svg',
      routerLink: '/member/explore',
    },
    {
      text: 'Guides',
      whiteUrl: '/assets/guides-white.svg',
      blueUrl: '/assets/guides-blue.svg',
      routerLink: '/member/travel-guides',
    },
    {
      text: 'Benefits',
      whiteUrl: '/assets/benefits-white.svg',
      blueUrl: '/assets/benefits-blue.svg',
      routerLink: '/member/benefits',
    },
    {
      text: 'Refer',
      whiteUrl: '/assets/refer-white.png',
      blueUrl: '/assets/refer-blue.png',
      routerLink: '/member/refer',
    },
    {
      text: 'Account',
      whiteUrl: '/assets/account-white.svg',
      blueUrl: '/assets/account-blue.svg',
      routerLink: '/member/account',
    },
    {
      text: 'Logout',
      whiteUrl: '/assets/logout-white.svg',
      blueUrl: '/assets/logout-blue.svg',
      routerLink: '/member/logout',
    },
  ]);
}

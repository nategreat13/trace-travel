import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent() {
      return import('./pages/home/home.component').then((m) => m.HomeComponent);
    },
  },
  {
    path: 'premium',
    loadComponent() {
      return import('./pages/premium/premium.component').then(
        (m) => m.PremiumComponent
      );
    },
  },
  {
    path: 'faqs',
    loadComponent() {
      return import('./pages/faqs/faqs.component').then((m) => m.FaqsComponent);
    },
  },
  {
    path: 'login',
    loadComponent() {
      return import('./pages/login/login.component').then(
        (m) => m.LoginComponent
      );
    },
  },
];

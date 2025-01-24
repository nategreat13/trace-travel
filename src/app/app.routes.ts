import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AuthenticatedGuard } from './guards/authenticated.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent() {
      return import('./pages/home/home.component').then((m) => m.HomeComponent);
    },
    canActivate: [AuthGuard],
  },
  {
    path: 'premium',
    loadComponent() {
      return import('./pages/premium/premium.component').then(
        (m) => m.PremiumComponent
      );
    },
    canActivate: [AuthGuard],
  },
  {
    path: 'faqs',
    loadComponent() {
      return import('./pages/faqs/faqs.component').then((m) => m.FaqsComponent);
    },
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadComponent() {
      return import('./pages/login/login.component').then(
        (m) => m.LoginComponent
      );
    },
    canActivate: [AuthGuard],
  },
  {
    path: 'member/your-deals',
    loadComponent() {
      return import('./pages/your-deals/your-deals.component').then(
        (m) => m.YourDealsComponent
      );
    },
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'get-started',
    loadComponent() {
      return import('./pages/get-started/get-started.component').then(
        (m) => m.GetStartedComponent
      );
    },
    canActivate: [AuthGuard],
  },
];

import { Component, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [MatIcon, RouterLink, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isExpanded = signal(false);
  toggleExpanded() {
    this.isExpanded.set(!this.isExpanded());
  }
}

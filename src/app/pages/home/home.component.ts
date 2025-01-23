import { Component, OnInit, signal } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { GetStartedBlueButtonComponent } from '../../components/get-started-blue-button/get-started-blue-button.component';
import { OrangeIconWithOrangeBackgroundComponent } from '../../components/orange-icon-with-orange-background/orange-icon-with-orange-background.component';
import { PremiumPopupComponent } from '../../components/premium-popup/premium-popup/premium-popup.component';
import { TestComponent } from '../../components/test/test.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    NavbarComponent,
    GetStartedBlueButtonComponent,
    OrangeIconWithOrangeBackgroundComponent,
    PremiumPopupComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  showPremiumPopup = signal(false);
  constructor() {}

  clickShowPremiumPopup() {
    this.showPremiumPopup.set(true);
  }

  onClosePremiumPopup() {
    this.showPremiumPopup.set(false);
  }
}

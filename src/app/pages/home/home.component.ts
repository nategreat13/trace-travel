import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { GetStartedBlueButtonComponent } from '../../components/get-started-blue-button/get-started-blue-button.component';
import { OrangeIconWithOrangeBackgroundComponent } from '../../components/orange-icon-with-orange-background/orange-icon-with-orange-background.component';

@Component({
  selector: 'app-home',
  imports: [
    NavbarComponent,
    GetStartedBlueButtonComponent,
    OrangeIconWithOrangeBackgroundComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}

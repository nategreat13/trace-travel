import { Component, input } from '@angular/core';

@Component({
  selector: 'app-get-started-blue-button',
  imports: [],
  templateUrl: './get-started-blue-button.component.html',
  styleUrl: './get-started-blue-button.component.css',
})
export class GetStartedBlueButtonComponent {
  text = input('Get Started');
}

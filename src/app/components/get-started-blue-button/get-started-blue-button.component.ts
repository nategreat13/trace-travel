import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-get-started-blue-button',
  imports: [RouterLink],
  templateUrl: './get-started-blue-button.component.html',
  styleUrl: './get-started-blue-button.component.css',
})
export class GetStartedBlueButtonComponent {
  text = input('Get Started');
}

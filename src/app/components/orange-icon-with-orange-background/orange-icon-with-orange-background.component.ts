import { Component, input } from '@angular/core';

@Component({
  selector: 'app-orange-icon-with-orange-background',
  imports: [],
  templateUrl: './orange-icon-with-orange-background.component.html',
  styleUrl: './orange-icon-with-orange-background.component.css',
})
export class OrangeIconWithOrangeBackgroundComponent {
  imageUrl = input.required();
}

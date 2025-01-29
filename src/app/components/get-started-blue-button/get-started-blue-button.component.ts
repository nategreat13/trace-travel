import { Component, Input, OnInit, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CoreDataService } from '../../services/user/coreData.service';

@Component({
  selector: 'app-get-started-blue-button',
  imports: [RouterLink],
  templateUrl: './get-started-blue-button.component.html',
  styleUrl: './get-started-blue-button.component.css',
})
export class GetStartedBlueButtonComponent implements OnInit {
  @Input() text?: string; // Input property to allow a custom button text

  constructor(private coreDataService: CoreDataService) {}

  ngOnInit() {
    if (!this.text) {
      this.text = `Try for ${this.coreDataService.get().trialDays} days`;
    }
  }
}

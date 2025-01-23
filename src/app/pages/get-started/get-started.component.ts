import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavigationService } from '../../services/navigation.service';
import { CoreDataService } from '../../services/user/coreData.service';
import { AirportSelectComponent } from '../../components/airport-select/airport-select.component';
import { Airports } from '../../constants/airports.constants';

@Component({
  selector: 'app-get-started',
  imports: [ReactiveFormsModule, CommonModule, RouterLink, FormsModule],
  templateUrl: './get-started.component.html',
  styleUrl: './get-started.component.css',
})
export class GetStartedComponent {
  getStartedForm: FormGroup<{
    email: FormControl<string | null>;
    airport: FormControl<string | null>;
  }>;
  isLoading = signal(false);
  getStartedError = signal('');
  http = inject(HttpClient);
  coreDataService = inject(CoreDataService);
  navigationService = inject(NavigationService);

  options = signal(
    Airports.map((airport) => {
      return {
        label: `${airport.city} (${airport.code})`,
        value: airport.code,
      };
    })
  );

  constructor(private fb: FormBuilder) {
    this.getStartedForm = this.fb.group({
      email: this.fb.control<string>('', [
        Validators.required,
        Validators.email,
      ]),
      airport: this.fb.control<string>('', [Validators.required]),
    });
  }

  async onSubmit() {
    if (this.getStartedForm.valid) {
      this.getStartedError.set('');
      this.isLoading.set(true);
      const { email, airport } = this.getStartedForm.value;
    }
    this.isLoading.set(false);
  }
}

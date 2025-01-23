import { Component, inject, signal } from '@angular/core';
import { MarkdownCustomClassPipe } from '../../pipes/markdown-custom-class.pipe';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { CoreDataService } from '../../services/user/coreData.service';
import { firstValueFrom } from 'rxjs';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-login',
  imports: [
    MarkdownCustomClassPipe,
    ReactiveFormsModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoggingIn = signal(false);
  loginError = signal('');
  authService = inject(AuthService);
  http = inject(HttpClient);
  coreDataService = inject(CoreDataService);
  navigationService = inject(NavigationService);

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      this.loginError.set('');
      this.isLoggingIn.set(true);
      const { email, password } = this.loginForm.value;

      const loginResult = await this.authService.login(email, password);
      if (loginResult.status === 'success') {
        this.coreDataService.setUserCredential(loginResult.userCredential);
        const url = `https://us-central1-embarckstravel.cloudfunctions.net/api/get-drip-data?email=${encodeURIComponent(
          email
        )}`;
        try {
          const dripData = await firstValueFrom(this.http.get<any>(url));
          if (dripData) {
            const tags = dripData.tags;
            const customData = dripData.customData;
            this.coreDataService.setDripData(customData, tags);
            console.log(this.coreDataService.get(), 'mkDIzVuRj0');
            this.navigationService.goToYourDeals();
          } else {
            // TODO Handle no drip data
          }
        } catch (e) {
          // TODO Handle no drip data
        }
      } else {
        this.loginError.set(loginResult.errorMessage);
      }
      this.isLoggingIn.set(false);
    }
  }
}

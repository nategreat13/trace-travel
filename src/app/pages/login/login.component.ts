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
import { CoreDataService } from '../../services/user/coreData.service';
import { NavigationService } from '../../services/navigation.service';
import { ApiService } from '../../services/api/api.service';

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
  apiService = inject(ApiService);
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
        const dripDataRes = await this.apiService.getDripData(email);
        console.log(dripDataRes, '1JkNovkBn0');
        switch (dripDataRes.status) {
          case 'success':
            this.coreDataService.setDripData(dripDataRes.dripData);
            this.navigationService.goToYourDeals();
            break;
          case 'error':
            this.coreDataService.setDripData(null);
            return;
            break;
          case 'notFound':
            this.coreDataService.setDripData(null);
            this.navigationService.goToYourDeals();
        }
      } else {
        this.loginError.set(loginResult.errorMessage);
      }
      this.isLoggingIn.set(false);
    }
  }
}

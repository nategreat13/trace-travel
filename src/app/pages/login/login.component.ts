import { Component, signal } from '@angular/core';
import { MarkdownCustomClassPipe } from '../../pipes/markdown-custom-class.pipe';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

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

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      this.isLoggingIn.set(true);
      await new Promise((res, rej) => {
        setTimeout(() => {
          res(null);
        }, 4000);
      });
      this.isLoggingIn.set(false);
    }
  }
}

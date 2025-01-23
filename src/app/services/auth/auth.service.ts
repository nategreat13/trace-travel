import { Injectable } from '@angular/core';
import {
  signInWithEmailAndPassword,
  Auth,
  UserCredential,
  User,
  authState,
  signOut,
} from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<User | null>; // Observable to track the auth state
  constructor(private auth: Auth) {
    this.user$ = authState(this.auth);
  }

  async login(
    email: string,
    password: string
  ): Promise<
    | { status: 'success'; userCredential: UserCredential }
    | { status: 'error'; errorMessage: string }
  > {
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return { status: 'success', userCredential };
    } catch (e: any) {
      let errorMessage =
        'Something went wrong. Please try again. If the issue persists, please contact us at contact@tracetravel.co.';
      var errorCode = e.code;
      if (errorCode === 'auth/invalid-email') {
        errorMessage = 'The email is invalid';
      } else if (errorCode === 'auth/user-not-found') {
        errorMessage = `Could not find an account with that information. If you had an account on our old website, you need to create a new password. Click "SIGN UP" below to create a password for the new website.`;
      } else if (errorCode === 'auth/wrong-password') {
        errorMessage = 'The password is incorrect';
      }
      return { status: 'error', errorMessage };
    }
  }
  async logout(): Promise<
    { status: 'success' } | { status: 'error'; errorMessage: string }
  > {
    try {
      await signOut(this.auth);
      return { status: 'success' };
    } catch (e: any) {
      return {
        status: 'error',
        errorMessage: 'Failed to log out. Please try again.',
      };
    }
  }
}

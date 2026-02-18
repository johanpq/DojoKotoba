import { Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';
import { LoginButtonComponent } from './components/login-button.component';
import { LogoutButtonComponent } from './components/logout-button.component';
import { ProfileComponent } from './components/profile.component';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    LoginButtonComponent,
    LogoutButtonComponent,
    ProfileComponent
  ],
  template: `
    @if (isBrowser) {

      <!-- Loading State -->
      @if (auth?.isLoading$ | async) {
        <div>Loading...</div>
      }

      @if (auth?.error$ | async; as error) {
        <div>{{ error.message }}</div>
      }

      @if (auth?.isAuthenticated$ | async) {
        <app-profile />
        <app-logout-button />
      } @else {
        <app-login-button />
      }

    } @else {
      <!-- SSR render simples -->
      <div>Loading...</div>
    }
  `
})
export class AppComponent {

  private platformId = inject(PLATFORM_ID);
  isBrowser = isPlatformBrowser(this.platformId);

  auth?: AuthService;

  constructor() {
    if (this.isBrowser) {
      this.auth = inject(AuthService);
    }
  }
}

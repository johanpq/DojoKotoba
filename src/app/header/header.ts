import { Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import { LoginButtonComponent } from '../components/login-button.component';
import { LogoutButtonComponent } from '../components/logout-button.component';
import { ProfileComponent } from '../components/profile.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    LoginButtonComponent,
    ProfileComponent,
  ],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {

  private platformId = inject(PLATFORM_ID);
  isBrowser = isPlatformBrowser(this.platformId);

  auth?: AuthService;

  constructor() {
    if (this.isBrowser) {
      this.auth = inject(AuthService);
    }
  }
}

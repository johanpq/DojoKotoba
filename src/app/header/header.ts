import { Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import { LoginButtonComponent } from '../components/login-button.component';
import { ProfileComponent } from '../components/profile.component';
import { RouterLink, RouterModule } from "@angular/router";
import { BottomSheetOverviewExample } from "../bottom-sheet/bottom-sheet";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    LoginButtonComponent,
    ProfileComponent,
    RouterLink,
    RouterModule,
    BottomSheetOverviewExample
  ],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {

  private platformId = inject(PLATFORM_ID);
  isBrowser = isPlatformBrowser(this.platformId);

  auth?: AuthService;

  chosenRoute: string = 'Explorar'

  changeRoute(newRoute: string) {
    this.chosenRoute = newRoute
  }

  constructor() {
    if (this.isBrowser) {
      this.auth = inject(AuthService);
    }
  }
}

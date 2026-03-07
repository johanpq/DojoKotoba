import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-button',
  standalone: true,
  styles: [`
    .btn {
      @media (max-width: 768px) {
        padding: .7rem;
      }
    }

  `],
  template: `
    <button
      (click)="loginWithRedirect()"
      class="button login btn"
    >
      Entrar
    </button>
  `
})
export class LoginButtonComponent {
  private auth = inject(AuthService);

  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
  }
}

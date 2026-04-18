import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';
import { LogoutButtonComponent } from "./logout-button.component";
import { heroChevronDown } from '@ng-icons/heroicons/outline';
import { provideIcons, NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, LogoutButtonComponent, NgIcon],
  providers: [provideIcons({ heroChevronDown })],
  styles: [`
    .profile-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: .5rem;
      cursor: pointer;

      @media (max-width: 768px) {
        display: none;
      }
    }

    .profile-modal {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: .5rem;
      position: absolute;
      background-color: var(--bg-secondary);
      border: 1px solid #0000003d;
      box-shadow: 0 0 5px 1px var(--text-main);
      border-radius: 5px;
      width: 12.9rem;
      right: 2rem;
      margin-top: .5rem;
      z-index: 5;

      @media (max-width: 1024px) {
        right: 1rem;
      }
    }

    .icon {
      color: var(--text-main);
    }
  `],
  template: `
    @if (auth.isLoading$ | async) {
      <div class="loading-text">Loading profile...</div>
    }

    @if ((auth.isAuthenticated$ | async) && (auth.user$ | async); as user) {
      <div style="display: flex; flex-direction: row; align-items: center; gap: 1rem;">
        @if (user.picture) {
          <div class="profile-container" (click)="funcToogleModal()">
            <img
              [src]="user.picture"
              [alt]="user.name || 'User'"
              class="profile-picture"
              style="
                width: 30px;
                height: 30px;
                border-radius: 50%;
                object-fit: cover;
                border: 3px solid var(--text-main);
              "
            />
            <div style="font-weight: 600; color: var(--text-main);">{{truncateValue(user.name, 10)}}</div>

            <ng-icon class="icon" name="heroChevronDown" size="16"></ng-icon>
          </div>
        }
        <div style="text-align: center;">
          <div
            class="profile-name"
            style="
              font-size: 1rem;
              font-weight: 600;
              color: #E2E8F0;
              margin-bottom: 0.5rem;
            "
          >
            <!-- {{ user.name }} -->
          </div>
          <div
            class="profile-email"
            style="
              font-size: 1rem;
              color: #E2E8F0;
            "
          >
            <!-- {{ user.email }} -->
          </div>
        </div>
      </div>
    }

    <!-- MODAL -->

    @if ((toogleModal) && (auth.isAuthenticated$ | async) && (auth.user$ | async); as user) {
      <div class="profile-modal">
        <img
          [src]="user.picture"
          [alt]="user.name || 'User'"
          class="profile-picture"
          style="
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid var(--text-main);
            margin: .5rem 0;
          "
        />

        <p style="font-size: .8rem; color: var(--text-main); font-weight: 600;">Nome: {{truncateValue(user.name, 10)}}</p>
        <p style="font-size: .65rem; color: var(--text-main); font-weight: 600;">Email: {{user.email}}</p>

        <hr style="height: 1px; width: 80%;">

        <app-logout-button></app-logout-button>

        <span style="margin-bottom: .2rem;"></span>
      </div>
    }
  `
})
export class ProfileComponent {
  protected auth = inject(AuthService);

  toogleModal: boolean = false

  funcToogleModal() {
    this.toogleModal = !this.toogleModal
  }

  truncateValue(value?: string, limit: number = 10) {
    if(!value) return '';

    const splitValue = value.slice(0, 1).toUpperCase()
    const restValue = value.slice(1, value.length)
    const name = splitValue + restValue

    return (name.length > limit) ? name.slice(0, limit) : name
  }
}

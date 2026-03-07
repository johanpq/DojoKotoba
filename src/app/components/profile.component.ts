import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';
import { LogoutButtonComponent } from "./logout-button.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, LogoutButtonComponent],
  styles: [`
    .profile-modal {
      @media (max-width: 1024px) {
        right: 1rem;
      }
    }

  `],
  template: `
    @if (auth.isLoading$ | async) {
      <div class="loading-text">Loading profile...</div>
    }

    @if ((auth.isAuthenticated$ | async) && (auth.user$ | async); as user) {
      <div style="display: flex; flex-direction: row; align-items: center; gap: 1rem;">
        @if (user.picture) {
          <div style="display: flex; flex-direction: row; align-items: center; gap: .5rem; cursor: pointer;" (click)="funcToogleModal()">
            <img
              [src]="user.picture"
              [alt]="user.name || 'User'"
              class="profile-picture"
              style="
                width: 30px;
                height: 30px;
                border-radius: 50%;
                object-fit: cover;
                border: 3px solid #5E241A;
              "
            />
            <div>{{truncateValue(user.name, 10)}}</div>

            <img style="height: 14px; width: 14px;" src="./toogle.png" alt="Toggle">
          </div>
        }
        <div style="text-align: center;">
          <div
            class="profile-name"
            style="
              font-size: 1rem;
              font-weight: 600;
              color: #f7fafc;
              margin-bottom: 0.5rem;
            "
          >
            <!-- {{ user.name }} -->
          </div>
          <div
            class="profile-email"
            style="
              font-size: 1rem;
              color: #a0aec0;
            "
          >
            <!-- {{ user.email }} -->
          </div>
        </div>
      </div>
    }

    <!-- MODAL -->

    @if ((toogleModal) && (auth.isAuthenticated$ | async) && (auth.user$ | async); as user) {
      <div class="profile-modal" style="display: flex; justify-content: center; align-items: center; flex-direction: column; gap: .5rem; position: absolute; background-color: white; border-radius: 5px; width: 12rem; margin-top: .5rem;">
        <img
          [src]="user.picture"
          [alt]="user.name || 'User'"
          class="profile-picture"
          style="
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid #5E241A;
            margin: .5rem 0;
          "
        />

        <p style="font-size: .8rem; color: #5e241ab7; font-weight: 600;">Nome: {{user.name}}</p>
        <p style="font-size: .8rem; color: #5e241ab7; font-weight: 600;">Email: {{user.email}}</p>

        <hr style="height: 1px; width: 80%;">

        <app-logout-button></app-logout-button>
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

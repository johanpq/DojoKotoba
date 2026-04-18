import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { NgIcon, provideIcons } from "@ng-icons/core";
import { heroBars3 } from '@ng-icons/heroicons/outline';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { LogoutButtonComponent } from "../components/logout-button.component";

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  standalone: true,
  imports: [MatListModule, RouterLink, RouterLinkActive, CommonModule, LogoutButtonComponent],
  styles: [`
    .active-item {
      background: rgba(0, 0, 0, 0.08) !important;
      color: #3f51b5 !important;
    }

    .profile-container {
      display: flex;
      align-items: center;
      gap: 3.1rem;
      margin-top: 2rem;
    }

    .hr {
      margin: 1rem 0;
    }

    .email-div {
      color: darkslategray;
      text-align: center;
      font-size: .8rem;
      margin-top: .9rem
    }
  `],
  template: `
    <mat-nav-list>
      <a
        routerLink="/explorar"
        mat-list-item
        routerLinkActive="active-item"
        (click)="openLink($event)">
        <span autofocus="Explorar" matListItemTitle>Explorar</span>
        <span>Explore os conteúdos</span>
      </a>

      <a
        routerLink="/games"
        mat-list-item
        routerLinkActive="active-item"
        (click)="openLink($event)">
        <span autofocus="Jogos" matListItemTitle>Jogos</span>
        <span>Coloque em prática o conteúdo aprendido</span>
      </a>

      @if ((auth.isAuthenticated$ | async) && (auth.user$ | async); as user) {
        @if (user.picture) {
          <hr class="hr">
          <div
            class="profile-container"
            mat-list-item
            routerLinkActive="active-item"
            (click)="openLink($event)">
            <img
              matListItemTitle
              [src]="user.picture"
              alt="Foto"
              style="
                width: 36px;
                height: 36px;
                border-radius: 50%;
                object-fit: cover;
                border: 3px solid #5E241A;
              ">
              <div matListItemTitle>{{user.name}}</div>
              <div matListItemTitle>
                <app-logout-button></app-logout-button>
              </div>
            </div>
          <div class="email-div">{{user.email}}</div>
        }
      }
    </mat-nav-list>
  `
})
export class BottomSheetOverviewExampleSheet {
  private _bottomSheetRef = inject<MatBottomSheetRef<BottomSheetOverviewExampleSheet>>(MatBottomSheetRef);
  protected auth = inject(AuthService);

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}

/**
 * 2. COMPONENTE PRINCIPAL (O que tem o botão)
 */
@Component({
  selector: 'app-bottom-sheet',
  standalone: true,
  imports: [MatButtonModule, MatBottomSheetModule, NgIcon],
  providers: [provideIcons({ heroBars3 })],
  styles: [`

    .icon {
      display: inline-block;
      vertical-align: middle;
      color: black;
    }

    button {
      min-width: 38px;
      padding: 0;
    }
  `],
  template: `
    <button mat-raised-button color="primary" (click)="openBottomSheet()">
      <ng-icon class="icon" name="heroBars3" size="24"></ng-icon>
    </button>
  `,
})
export class BottomSheetOverviewExample {
  private _bottomSheet = inject(MatBottomSheet);

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet, {
      autoFocus: 'dialog' // Isso impede que o primeiro link seja focado/marcado
    });
  }
}

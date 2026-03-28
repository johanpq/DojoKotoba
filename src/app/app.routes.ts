import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Explorar } from './pages/explorar/explorar';
import { Games } from './pages/games/games';
import { authGuard } from './auth/auth-guard';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    canActivate: [authGuard]
  },

  {
    path: 'explorar',
    component: Explorar,
    canActivate: [authGuard]
  },

  {
    path: 'games',
    component: Games,
    canActivate: [authGuard]
  },
];

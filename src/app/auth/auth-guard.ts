import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import { CanActivateFn, Router } from '@angular/router';
import { map, of } from 'rxjs';

export const authGuard: CanActivateFn = (_, state) => {

  const platformId = inject(PLATFORM_ID)
  const router = inject(Router)

  // se estiver no servidor, deixa passar
  if (!isPlatformBrowser(platformId)) {
    return of(true);
  }

  const auth = inject(AuthService);

  return auth.isAuthenticated$.pipe(
    map((isAuthenticated) => {

      // se estiver autenticado mas estiver na rota /
      if (isAuthenticated && state.url === '/' || state.url === 'https://dojo-kotoba.vercel.app/') {
        return router.createUrlTree(['/explorar']);
      }

      // se não estiver autenticado e entrar em explorar
      if (!isAuthenticated && state.url === '/explorar') {
        auth.loginWithRedirect();
        return false;
      }

      // se não estiver autenticado e entrar em games
      if (!isAuthenticated && state.url === '/games') {
        auth.loginWithRedirect();
        return false;
      }

      return true;
    })
  );
};

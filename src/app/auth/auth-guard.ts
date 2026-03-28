import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import { CanActivateFn, Router } from '@angular/router';
import { map, of } from 'rxjs';

export const authGuard: CanActivateFn = (_, state) => {
  const platformId = inject(PLATFORM_ID);
  const router = inject(Router);

  if (!isPlatformBrowser(platformId)) {
    return of(true);
  }

  const auth = inject(AuthService);

  return auth.isAuthenticated$.pipe(
    map((isAuthenticated) => {
      // 1. Remova a URL completa. O 'state.url' retorna apenas o path (ex: '/')
      const isRootPath = state.url === '/' || state.url.includes('callback');

      // Se autenticado e tentar ir para a Home, manda para Explorar
      if (isAuthenticated && isRootPath) {
        return router.createUrlTree(['/explorar']);
      }

      // 2. Proteção de rotas privadas (Explorar e Games)
      // Usamos .startsWith para evitar problemas com parâmetros na URL
      const isPrivateRoute = state.url.startsWith('/explorar') || state.url.startsWith('/games');

      if (!isAuthenticated && isPrivateRoute) {
        // No Mobile, o loginWithRedirect precisa de um tempo para processar
        auth.loginWithRedirect({
          appState: { target: state.url }
        });
        return false;
      }

      return true;
    })
  );
};

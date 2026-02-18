import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { appConfig } from './app/app.config';
import { mergeApplicationConfig } from '@angular/core';
import { provideAuth0 } from '@auth0/auth0-angular';
import { environment } from './environments/environment';

const browserConfig = mergeApplicationConfig(appConfig, {
  providers: [
    provideAuth0({
      domain: environment.auth0.domain,
      clientId: environment.auth0.clientId,
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  ]
});

bootstrapApplication(AppComponent, browserConfig)
  .catch(err => console.error(err));

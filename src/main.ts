import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideAnimations(), 
    provideHttpClient(),
    provideToastr(),
    ...appConfig.providers
  ]
}).catch((err) => console.error(err));


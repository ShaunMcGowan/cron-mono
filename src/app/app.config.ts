import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { IonicModule } from '@ionic/angular';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(IonicModule.forRoot({})),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
  ],
};

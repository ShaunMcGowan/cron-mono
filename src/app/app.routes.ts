import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@cron-mono/ion-cron').then((m) => m.IonCronComponent),
  },
];

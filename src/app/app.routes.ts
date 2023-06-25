import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadComponent: () => import('@ionic-cron/ion-cron').then((m) => m.IonCronComponent),
    },
];

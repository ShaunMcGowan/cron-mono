import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CronGenComponent } from './cron-editor/cron-editor.component';
import { CronOptions } from './cron-editor/CronOptions';

@Component({
  selector: 'ionic-cron-ion-cron',
  standalone: true,
  imports: [CommonModule, IonicModule, CronGenComponent],
  template: `
    <ion-content>
      <ion-button>Hello!</ion-button>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Card Title</ion-card-title>
          <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          Here's a small text description for the card content. Nothing more,
          nothing less.
        </ion-card-content>
      </ion-card>
      <cron-editor [options]="cronOptions"></cron-editor>
    </ion-content>
  `,
  styles: [``],
})
export class IonCronComponent {
  public cronOptions: CronOptions = {
    defaultTime: '00:00:00',

    hideMinutesTab: false,
    hideHourlyTab: false,
    hideDailyTab: false,
    hideWeeklyTab: false,
    hideMonthlyTab: false,
    hideYearlyTab: false,
    hideAdvancedTab: false,
    hideSpecificWeekDayTab: false,
    hideSpecificMonthWeekTab: false,

    use24HourTime: true,
    hideSeconds: false,

    cronFlavor: 'quartz', //standard or quartz
  };
}

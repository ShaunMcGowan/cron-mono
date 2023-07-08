import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CronGenComponent } from './cron-editor/cron-editor.component';
import { CronOptions } from './cron-editor/CronOptions';

@Component({
  selector: 'cron-mono-ion-cron',
  standalone: true,
  imports: [CommonModule, IonicModule, CronGenComponent],
  template: `
    <ion-content>
      <ion-item>
        <ion-label>
          <h1>Ion Cron Example Component</h1>
        </ion-label>
      </ion-item>
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

    use24HourTime: false,
    hideSeconds: false,

    cronFlavor: 'quartz', //standard or quartz
  };
}

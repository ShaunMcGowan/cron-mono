import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgForOf, NgIf } from '@angular/common';

export interface TimePickerModel {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function* range(start: number, end: number) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

@Component({
  standalone: true,
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'cron-time-picker',
  template: `
    <ion-item [formGroup]="getFormGroup(parent.control)">
      <ng-container *ngIf="!hideHours">
        <ion-label>Hour(s)</ion-label>
        <ion-select formControlName="hours">
          <ion-select-option *ngFor="let hour of hours" [value]="hour">
            {{ hour }}
          </ion-select-option>
        </ion-select>
      </ng-container>

      <ng-container *ngIf="!hideMinutes">
        <span *ngIf="!hideHours">:</span>
        <ion-label>Minute(s)</ion-label>
        <ion-select formControlName="minutes">
          <ion-select-option *ngFor="let minute of minutes" [value]="minute">
            {{ minute }}
          </ion-select-option>
        </ion-select>
      </ng-container>

      <ng-container *ngIf="!hideSeconds">
        <span *ngIf="!hideMinutes">:</span>
        <ion-label>Second(s)</ion-label>
        <ion-select formControlName="seconds">
          <ion-select-option *ngFor="let second of seconds" [value]="second">
            {{ second }}
          </ion-select-option>
        </ion-select>
      </ng-container>

      <ng-container *ngIf="!use24HourTime">
        <span></span>.
        <ion-select formControlName="hourType">
          <ion-select-option
            *ngFor="let hourType of hourTypes"
            [value]="hourType"
          >
            {{ hourType }}
          </ion-select-option>
        </ion-select>
      </ng-container>
    </ion-item>
  `,
  providers: [],
  imports: [IonicModule, ReactiveFormsModule, NgIf, NgForOf],
})
export class TimePickerComponent {
  @Input() public disabled = false;
  @Input() public use24HourTime = true;
  @Input() public hideHours = false;
  @Input() public hideMinutes = false;
  @Input() public hideSeconds = true;

  public minutes = [...range(0, 59)];
  public seconds = [...range(0, 59)];
  public hourTypes = ['AM', 'PM'];

  get hours(): number[] {
    return this.use24HourTime ? [...range(0, 23)] : [...range(0, 12)];
  }

  getFormGroup(control: AbstractControl | null) {
    return control as FormGroup;
  }

  constructor(protected readonly parent: ControlContainer) {}
}

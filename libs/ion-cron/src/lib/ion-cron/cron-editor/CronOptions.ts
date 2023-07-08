export interface CronOptions {
  formInputClass?: string;
  formSelectClass?: string;
  formRadioClass?: string;
  formCheckboxClass?: string;

  defaultTime: string;

  hideMinutesTab: boolean;
  hideHourlyTab: boolean;
  hideDailyTab: boolean;
  hideWeeklyTab: boolean;
  hideMonthlyTab: boolean;
  hideYearlyTab: boolean;
  hideAdvancedTab: boolean;

  use24HourTime: boolean;
  hideSeconds: boolean;

  cronFlavor: 'standard' | 'quartz';
}

export interface CronState {
  minutes: {
    minutes: number;
    seconds: number;
  };
  hourly: {
    hours: number;
    minutes: number;
    seconds: number;
  };
  daily: DailyCronState;
  weekly: WeeklyCronState;
  monthly: MonthlyCronState;
  yearly: YearlyCronState;
  advanced: {
    expression: string;
  };
}

export type DailyCronState = {
  subTab: 'everyDays' | 'everyWeekDay';
  everyDays: {
    seconds: number;
    minutes: number;
    hours: number;
    hourType?: string;
    days: number;
  };
  everyWeekDay: {
    seconds: number;
    minutes: number;
    hours: number;
    hourType?: string;
  };
};

export type WeeklyCronState = {
  MON: boolean;
  TUE: boolean;
  WED: boolean;
  THU: boolean;
  FRI: boolean;
  SAT: boolean;
  SUN: boolean;
  seconds: number;
  minutes: number;
  hours: number;
  hourType?: string;
};

export type MonthlyCronState = {
  subTab: 'specificDay' | 'specificWeekDay';
  specificDay: {
    seconds: number;
    minutes: number;
    hours: number;
    hourType?: string;
    day: string;
    months: number;
  };
  specificWeekDay: {
    seconds: number;
    minutes: number;
    hours: number;
    hourType?: string;
    day: string;
    monthWeek: string;
    months: number;
  };
};

export type YearlyCronState = {
  subTab: 'specificMonthDay' | 'specificMonthWeek';
  specificMonthDay: {
    seconds: number;
    minutes: number;
    hours: number;
    hourType?: string;
    day: string;
    month: number;
  };
  specificMonthWeek: {
    seconds: number;
    minutes: number;
    hours: number;
    hourType?: string;
    month: number;
    day: string;
    monthWeek: string;
  };
};

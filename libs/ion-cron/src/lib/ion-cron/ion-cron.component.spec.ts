import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonCronComponent } from './ion-cron.component';

describe('IonCronComponent', () => {
  let component: IonCronComponent;
  let fixture: ComponentFixture<IonCronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IonCronComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IonCronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MainComponent} from './main.component';
import {provideMockStore} from '@ngrx/store/testing';
import {TranslateModule} from '@ngx-translate/core';
import {UserPickerModule} from '../shared/user-picker/user-picker.module';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {CalendarViewPickerModule} from '../shared/calendar-view-picker/calendar-view-picker.module';
import {CalendarDisplayModule} from '../shared/calendar/calendar.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  const initialState = {};
  let el: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MainComponent
      ],
      imports: [
        TranslateModule.forRoot(),
        UserPickerModule,
        NgbDatepickerModule,
        CalendarDisplayModule,
        CalendarViewPickerModule,
        BrowserAnimationsModule,
        CalendarModule.forRoot({
          provide: DateAdapter,
          useFactory: adapterFactory
        }),
      ],
      providers: [
        provideMockStore({initialState})
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    el = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the right template', () => {
    expect(el.querySelector('ama-user-picker')).toBeDefined();
    expect(el.querySelector('ngb-datepicker')).toBeDefined();
    expect(el.querySelector('ama-calendar-view-picker')).toBeDefined();
    expect(el.querySelector('ama-calendar')).toBeDefined();
  });
});

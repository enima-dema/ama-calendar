import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {CalendarModule, CalendarView, DateAdapter} from 'angular-calendar';
import {TranslateModule} from '@ngx-translate/core';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarComponent} from './calendar.component';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;
  let el: any;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        CalendarComponent
      ], imports: [
        BrowserAnimationsModule,
        CalendarModule.forRoot({
          provide: DateAdapter,
          useFactory: adapterFactory
        }),
        TranslateModule.forRoot()
      ], providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    el = fixture.nativeElement;
    component.viewDate = new Date();
    component.angularCalendarEvents = [];
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeDefined('The component should be created');
  });

  it('should show the month view when it is selected', () => {
    component.view = CalendarView.Month;
    fixture.detectChanges();
    expect(el.querySelector('mwl-calendar-month-view')).toBeDefined('The component should display the month view');
  });

  it('should show the week view when it is selected', () => {
    component.view = CalendarView.Week;
    fixture.detectChanges();
    expect(el.querySelector('mwl-calendar-week-view')).toBeDefined('The component should display the week view');
  });

  it('should show the day view when it is selected', () => {
    component.view = CalendarView.Day;
    fixture.detectChanges();
    expect(el.querySelector('mwl-calendar-day-view')).toBeDefined('The component should display the day view');
  });

  it('should call onMonthClicked when a cell is clicked in the month view', () => {
    const onMonthClickedSpy = spyOn(component, 'onMonthClicked');
    component.view = CalendarView.Month;
    component.viewDate = new Date(2019, 9, 17);
    fixture.detectChanges();
    const cells = el.querySelectorAll('mwl-calendar-month-cell');
    cells[8].click();
    expect(component.onMonthClicked).toHaveBeenCalled();
    expect(onMonthClickedSpy.calls.mostRecent().args[0].day.date).toEqual(new Date(2019, 9, 7),
      'The day clicked should be the one fired');
  });

  it('should call onWeekClicked when a cell is clicked in the week view', () => {
    const onWeekClickedSpy = spyOn(component, 'onWeekClicked');
    component.view = CalendarView.Week;
    component.viewDate = new Date(2019, 9, 17);
    fixture.detectChanges();
    const columns = el.querySelectorAll('.cal-day-column');
    const halfHours = columns[2].querySelectorAll('mwl-calendar-week-view-hour-segment');
    halfHours[17].click();
    expect(component.onWeekClicked).toHaveBeenCalled();
    expect(onWeekClickedSpy.calls.mostRecent().args[0].date).toEqual(new Date(2019, 9, 15, 8, 30),
      'The day and hour clicked should be the one fired');
  });

  it('should call onDayClicked when a cell is clicked in the day view', () => {
    const onDayClickedSpy = spyOn(component, 'onDayClicked');
    component.view = CalendarView.Day;
    component.viewDate = new Date(2019, 9, 17);
    fixture.detectChanges();
    const halfHours = el.querySelectorAll('mwl-calendar-week-view-hour-segment');
    halfHours[15].click();
    expect(component.onDayClicked).toHaveBeenCalled();
    expect(onDayClickedSpy.calls.mostRecent().args[0].date).toEqual(new Date(2019, 9, 17, 7, 30),
      'The day and hour clicked should be the one fired');
  });
});

import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output,} from '@angular/core';
import {CalendarEvent, CalendarView} from 'angular-calendar';
// eslint-disable-next-line import/no-extraneous-dependencies
import {MonthViewDay} from 'calendar-utils';
import {CALENDAR_ANIMATIONS} from './animation';
import {EventModel} from '../../models/event.model';

@Component({
  selector: 'ama-calendar',
  styleUrls: ['./calendar.component.css'],
  templateUrl: './calendar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    ...CALENDAR_ANIMATIONS,
  ],
})
export class CalendarComponent {
  @Input() public view: CalendarView;

  @Input()
  public set setEvents(events: EventModel[]) {
    this.angularCalendarEvents = this.convertEventsToAngularEvents(events);
  }

  @Input() public viewDate: Date;
  @Output() public dateSelected: EventEmitter<Date> = new EventEmitter<Date>();
  @Output() public eventSelected: EventEmitter<EventModel> = new
  EventEmitter<EventModel>();
  public angularCalendarEvents: CalendarEvent[] = [];
  public monthView: CalendarView = CalendarView.Month;
  public weekView: CalendarView = CalendarView.Week;
  public dayView: CalendarView = CalendarView.Day;

  public onMonthClicked(dayClicked: { day: MonthViewDay }): void {
    this.dateSelected.emit(dayClicked.day.date);
  }

  public onWeekClicked(hourClicked: { date: Date }): void {
    this.dateSelected.emit(hourClicked.date);
  }

  public onDayClicked(hourClicked: { date: Date }): void {
    this.dateSelected.emit(hourClicked.date);
  }

  public onEventClicked(eventClicked: { event: CalendarEvent<EventModel> }): void {
    this.eventSelected.emit(eventClicked.event.meta);
  }

  private convertEventsToAngularEvents(events: EventModel[]): CalendarEvent[] {
    return events.map((event: EventModel) => ({
      id: event.id,
      start: event.startDate,
      end: event.endDate,
      title: event.title,
      allDay: event.allDayEvent,
      color: {primary: event.colorInHex, secondary: event.colorInHex},
      meta: event,
    }));
  }
}

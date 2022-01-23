import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CalendarView} from 'angular-calendar';

@Component({
  selector: 'ama-calendar-view-picker',
  templateUrl: './calendar-view-picker.component.html',
  styleUrls: ['./calendar-view-picker.component.css']
})
export class CalendarViewPickerComponent {
  @Input() public view: CalendarView;
  @Output() public viewEmitter: EventEmitter<CalendarView> = new EventEmitter<CalendarView>();
  public monthView: CalendarView = CalendarView.Month;
  public weekView: CalendarView = CalendarView.Week;
  public dayView: CalendarView = CalendarView.Day;

  public setView(view: CalendarView): void {
    this.viewEmitter.emit(view);
  }
}

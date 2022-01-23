import {
  animate, style, transition, trigger,
} from '@angular/animations';
import { CalendarView } from 'angular-calendar';

type TranslationValue = -100 | 0 | 100;

export function createCalendarAnimation(
  inView: CalendarView,
  outView: CalendarView,
  inSlide: TranslationValue,
  outSlide: TranslationValue,
): any {
  return transition(`${inView} => ${outView}`,
    [
      style({ transform: `translateX(${inSlide}%)` }),
      animate('400ms ease-in'), style({ transform: `translateX(${outSlide}%)` }),
    ]);
}

/**
 * Works only for the CalendarComponent. Don't reuse in another component.
 */
export const CALENDAR_ANIMATIONS: any[] = [
  trigger('monthSlideIn', [
    createCalendarAnimation(CalendarView.Week, CalendarView.Month, -100, 0),
    createCalendarAnimation(CalendarView.Month, CalendarView.Week, 0, -100),
    createCalendarAnimation(CalendarView.Day, CalendarView.Month, -100, 0),
    createCalendarAnimation(CalendarView.Month, CalendarView.Day, 0, -100),
  ]),
  trigger('weekSlideIn', [
    createCalendarAnimation(CalendarView.Week, CalendarView.Month, 0, 100),
    createCalendarAnimation(CalendarView.Month, CalendarView.Week, 100, 0),
    createCalendarAnimation(CalendarView.Day, CalendarView.Week, -100, 0),
    createCalendarAnimation(CalendarView.Week, CalendarView.Day, 0, -100),
  ]),
  trigger('daySlideIn', [
    createCalendarAnimation(CalendarView.Week, CalendarView.Day, 100, 0),
    createCalendarAnimation(CalendarView.Day, CalendarView.Week, 0, 100),
    createCalendarAnimation(CalendarView.Month, CalendarView.Day, 100, 0),
    createCalendarAnimation(CalendarView.Day, CalendarView.Month, 0, 100),
  ]),
];

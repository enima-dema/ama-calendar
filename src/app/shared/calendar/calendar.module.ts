import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalendarComponent} from './calendar.component';
import {CalendarModule} from 'angular-calendar';

@NgModule({
  declarations: [
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    CalendarModule
  ],
  exports: [
    CalendarComponent
  ]
})
export class CalendarDisplayModule {
}

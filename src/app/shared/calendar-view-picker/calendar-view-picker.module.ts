import {NgModule} from '@angular/core';
import {CalendarViewPickerComponent} from './calendar-view-picker.component';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    CalendarViewPickerComponent,
  ],
  exports: [
    CalendarViewPickerComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class CalendarViewPickerModule {
}

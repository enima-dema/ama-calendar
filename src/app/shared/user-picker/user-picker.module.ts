import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserPickerComponent} from './user-picker.component';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateModule} from '@ngx-translate/core';
import {ColorPelletModule} from '../color-pellet/color-pellet.module';

@NgModule({
  declarations: [
    UserPickerComponent,
  ],
  imports: [
    CommonModule,
    NgbDropdownModule,
    TranslateModule,
    ColorPelletModule,
  ],
  exports: [
    UserPickerComponent,
  ]
})
export class UserPickerModule {
}

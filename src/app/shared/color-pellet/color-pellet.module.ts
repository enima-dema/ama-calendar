import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateModule} from '@ngx-translate/core';
import {ColorPelletComponent} from './color-pellet.component';

@NgModule({
  declarations: [
    ColorPelletComponent
  ],
  imports: [
    CommonModule,
    NgbDropdownModule,
    TranslateModule
  ],
  exports: [
    ColorPelletComponent
  ]
})
export class ColorPelletModule {
}

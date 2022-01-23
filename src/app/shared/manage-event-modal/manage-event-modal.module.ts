import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ManageEventModalComponent} from './manage-event-modal.component';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {NgbDatepickerModule, NgbTimepickerModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ManageEventModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    NgbDatepickerModule,
    NgbTimepickerModule
  ]
})
export class ManageEventModalModule { }

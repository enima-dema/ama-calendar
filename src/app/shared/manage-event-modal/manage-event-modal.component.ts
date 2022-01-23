import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbDate, NgbDateStruct, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {EventModel} from '../../models/event.model';

@Component({
  selector: 'ama-manage-event-modal',
  templateUrl: './manage-event-modal.component.html',
  styleUrls: ['./manage-event-modal.component.css']
})
export class ManageEventModalComponent implements OnInit {
  @Input() public event: EventModel; // Can be an empty one. The @Input is not necessary but clarify the purpose of this modal
  public title = '';
  public description = '';
  public startDate: NgbDate;
  public startTime: NgbTimeStruct;
  public endDate: NgbDate;
  public endTime: NgbTimeStruct;
  public allDayEvent = true;

  constructor(
    public modalInstance: NgbActiveModal,
  ) {
  }

  public ngOnInit(): void {
    this.setupFormData();
  }

  private setupFormData(): void {
    this.title = this.event.title;
    this.description = this.event.description;
    this.allDayEvent = this.event.allDayEvent;
    this.startDate = this.getNgbDateFromDate(this.event.startDate);
    this.startTime = this.getNgbTimeFromDate(this.event.startDate);
    if (this.event.endDate) {
      this.endDate = this.getNgbDateFromDate(this.event.endDate);
      this.endTime = this.getNgbTimeFromDate(this.event.endDate);
    }
  }

  public getDateFromNgbDate(ngbDate: NgbDate | NgbDateStruct): Date {
    return new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
  }

  public getNgbDateFromDate(date: Date): NgbDate {
    return NgbDate.from({year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()});
  }

  public setTimeOnDate(date: Date, ngbTime?: NgbTimeStruct): void {
    if (ngbTime) {
      date.setHours(ngbTime.hour, ngbTime.minute);
    }
  }

  public getNgbTimeFromDate(date: Date): NgbTimeStruct {
    return {hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds()};
  }

  public save(): void {
    this.event.startDate = this.getDateFromNgbDate(this.startDate);
    this.setTimeOnDate(this.event.startDate, this.startTime);
    if (this.endDate) {
      this.event.endDate = this.getDateFromNgbDate(this.endDate);
      this.setTimeOnDate(this.event.endDate, this.endTime);
    } else {
      delete this.event.endDate;
    }
    this.event.title = this.title;
    this.event.description = this.description;
    this.event.allDayEvent = this.allDayEvent;
    this.modalInstance.close({code: 'SAVE', data: this.event});
  }

  public delete(): void {
    this.modalInstance.close({code: 'DELETE', data: this.event});
  }

  public cancel(): void {
    this.modalInstance.close({code: 'CANCEL'});
  }
}

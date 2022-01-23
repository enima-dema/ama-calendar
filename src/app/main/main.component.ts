import {Component, OnInit} from '@angular/core';
import {UsersService} from '../services/users/users.service';
import {UserModel} from '../models/user.model';
import {EventModel} from '../models/event.model';
import {EventsService} from '../services/events/events.service';
import {CalendarView} from 'angular-calendar';
import {NgbDate, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ManageEventModalComponent} from '../shared/manage-event-modal/manage-event-modal.component';
import {clone} from 'lodash-es';

@Component({
  selector: 'ama-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public users: UserModel[] = [];
  public selectedUser: UserModel;
  public allEvents: EventModel[] = [];
  public selectedUserEvents: EventModel[] = [];
  public view: CalendarView = CalendarView.Month; // Month as default view
  public viewDate: Date = new Date(); // By default, the current day
  public viewDateForDatePicker: NgbDate; // By default, the current day

  constructor(
    private userService: UsersService,
    public eventService: EventsService,
    private modalService: NgbModal,
  ) {
  }

  public ngOnInit(): void {
    this.setupDatePicker();
    this.setupData();
  }

  private setupDatePicker(): void {
    this.viewDateForDatePicker = NgbDate.from({
      day: this.viewDate.getDay(), month: this.viewDate.getMonth() - 1, year: this.viewDate.getFullYear()
    });
  }

  private setupData(): void {
    this.setupUsers();
    this.setupEvents();
  }

  private setupUsers(): void {
    this.userService.findAll().subscribe((users: UserModel[]) => {
      this.users = users;
    });
  }

  private setupEvents(): void {
    this.eventService.findAll()
      .subscribe((events: EventModel[]) => {
        this.allEvents = events;
        this.setSelectedUserEvents();
      });
  }

  private setSelectedUserEvents(): void {
    this.selectedUserEvents = (this.allEvents || []).filter((event: EventModel) => event.userId === this.selectedUser?.id);
  }

  public onUserSelection(user: UserModel): void {
    this.selectedUser = user;
    this.loadEventForCurrentlySelectedUser();
  }

  private loadEventForCurrentlySelectedUser(): void {
    if (this.selectedUser) {
      this.setSelectedUserEvents();
    } else {
      this.selectedUserEvents = [];
    }
  }

  public setView(view: CalendarView): void {
    this.view = view;
  }

  public onEventClicked(event: EventModel): void {
    this.openManageEventModal(event);
  }

  public onDateClicked(date: Date): void {
    if (this.selectedUser) {
      this.openManageEventModal(undefined, date);
    }
  }

  private openManageEventModal(event?: EventModel, date?: Date): void {
    const modalRef: NgbModalRef = this.modalService.open(ManageEventModalComponent, {size: 'lg'});
    if (event) {
      modalRef.componentInstance.event = clone(event);
    } else {
      modalRef.componentInstance.event = this.createEmptyEvent(date);
    }
    modalRef.result.then((result: { code: string, data?: EventModel }) => {
      if (result.code === 'SAVE') {
        this.saveEvent(result.data);
      } else if (result.code === 'DELETE') {
        this.deleteEvent(result.data);
      }
    });
  }

  private saveEvent(event: EventModel): void {
    if (event.id) {
      this.eventService.editEvent(event);
    } else {
      this.eventService.addEvent(event);
    }
  }

  private deleteEvent(event: EventModel): void {
    this.eventService.removeEvent(event);
  }

  private createEmptyEvent(date: Date): EventModel {
    return {
      title: '',
      startDate: date,
      allDayEvent: true,
      userId: this.selectedUser.id,
      colorInHex: this.selectedUser.colorInHex,
    };
  }

  public datePickerSelect(date: NgbDate): void {
    this.viewDate = new Date(date.year, date.month - 1, date.day);
  }
}

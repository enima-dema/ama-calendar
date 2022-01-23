import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserModel} from '../../models/user.model';

// TODO Setup this as a true form field
@Component({
  selector: 'ama-user-picker',
  templateUrl: './user-picker.component.html',
  styleUrls: ['./user-picker.component.css']
})
export class UserPickerComponent {
  @Input() public users: UserModel[];
  @Output() public onSelection: EventEmitter<UserModel | undefined> = new EventEmitter<UserModel | undefined>();
  public selectedUser: UserModel;

  public selectUser(user: UserModel): void {
    this.selectedUser = user;
    this.onSelection.emit(user);
  }
}

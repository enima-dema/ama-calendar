import {Injectable} from '@angular/core';
import {UserModel} from '../../models/user.model';
import {Store} from '@ngrx/store';
import {selectUsers} from '../../state/users/users.selectors';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: Observable<UserModel[]>;

  constructor(private store: Store) {
    this.setupService();
  }

  private setupService(): void {
    this.users = this.store.select(selectUsers);
  }

  public findAll(): Observable<UserModel[]> {
    return this.users;
  }
}

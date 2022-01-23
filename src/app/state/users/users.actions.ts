import {createAction, props} from '@ngrx/store';
import {UserModel} from '../../models/user.model';

export const findAllUsers = createAction(
  '[User List] Find List Success',
  props<{ list: UserModel[] }>()
);

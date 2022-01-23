import {createReducer, on} from '@ngrx/store';
import {findAllUsers} from './users.actions';
import {UserModel} from '../../models/user.model';

export const initialState: UserModel[] = [
  {id: 1, colorInHex: '#FF5733', name: 'Auros'},
  {id: 2, colorInHex: '#979911', name: 'Thaeriel'},
  {id: 3, colorInHex: '#862699', name: 'Malissus'},
];

export const usersReducer = createReducer(
  initialState,
  on(findAllUsers, (state: UserModel[], {list}) => list),
);


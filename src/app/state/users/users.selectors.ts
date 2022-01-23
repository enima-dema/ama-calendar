import {createFeatureSelector} from '@ngrx/store';
import {UserModel} from '../../models/user.model';

export const selectUsers = createFeatureSelector<UserModel[]>('users');

import {createFeatureSelector} from '@ngrx/store';
import {EventModel} from '../../models/event.model';

export const selectEvents = createFeatureSelector<EventModel[]>('events');

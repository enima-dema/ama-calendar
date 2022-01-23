import {createAction, props} from '@ngrx/store';
import {EventModel} from '../../models/event.model';

export const addEvent = createAction(
  '[Event List] Add Event',
  props<{ event: EventModel }>()
);

export const editEvent = createAction(
  '[Event List] Edit Event',
  props<{ event: EventModel }>()
);

export const removeEvent = createAction(
  '[Event List] Remove Event',
  props<{ id: number }>()
);

export const findAllEvents = createAction(
  '[Event List] Find List Success',
  props<{ list: EventModel[] }>()
);

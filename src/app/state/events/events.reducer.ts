import {createReducer, on} from '@ngrx/store';
import {addEvent, editEvent, findAllEvents, removeEvent} from './events.actions';
import {EventModel} from '../../models/event.model';

export const initialState: EventModel[] = [];

export const eventsReducer = createReducer(
  initialState,
  on(findAllEvents, (state: EventModel[], {list}) => list),
  on(addEvent, (state: EventModel[], {event}) => {
    if (state.every((eventSome: EventModel) => eventSome.id !== event.id)) { // TODO Adding verification on object validity
      return [...state, event];
    }
    return state;
  }),
  on(editEvent, (state: EventModel[], {event}) => {
    state = state.filter((eventFilter: EventModel) => event.id !== eventFilter.id);
    state.push(event);
    /*const eventIndex: number = state.findIndex((eventFind: EventModel) => event.id === eventFind.id);
    if (eventIndex >= 0) {
      state[eventIndex] = event;
    }*/
    return state;
  }),
  on(removeEvent, (state: EventModel[], {id}) => {
    return state.filter((event: EventModel) => event.id !== id);
  }),
);


import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {EventModel} from '../../models/event.model';
import {selectEvents} from '../../state/events/events.selectors';
import {addEvent, editEvent, removeEvent} from '../../state/events/events.actions';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private events: Observable<EventModel[]>;
  private idCounter = 0;

  constructor(private store: Store) {
    this.setupService();
  }

  private setupService(): void {
    this.events = this.store.select(selectEvents);
  }

  public findAll(): Observable<EventModel[]> {
    return this.events;
  }

  public addEvent(event: EventModel): void {
    event.id = ++this.idCounter;
    this.store.dispatch(addEvent({event}));
  }

  public editEvent(event: EventModel): void {
    this.store.dispatch(editEvent({event}));
  }

  public removeEvent(event: EventModel): void {
    this.store.dispatch(removeEvent({id: event.id}));
  }
}

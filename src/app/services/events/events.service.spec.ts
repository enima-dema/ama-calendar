import { TestBed } from '@angular/core/testing';

import { EventsService } from './events.service';
import {provideMockStore} from '@ngrx/store/testing';

describe('EventsService', () => {
  let service: EventsService;
  const initialState = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({initialState})
      ]
    });
    service = TestBed.inject(EventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

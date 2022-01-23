import {TestBed} from '@angular/core/testing';

import {UsersService} from './users.service';
import {provideMockStore} from '@ngrx/store/testing';

describe('UsersService', () => {
  let service: UsersService;
  const initialState = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({initialState})
      ]
    });
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

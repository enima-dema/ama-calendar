import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {StoreModule} from '@ngrx/store';
import {MainComponent} from './main/main.component';
import {eventsReducer} from './state/events/events.reducer';
import {usersReducer} from './state/users/users.reducer';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {UserPickerModule} from './shared/user-picker/user-picker.module';
import {CalendarDisplayModule} from './shared/calendar/calendar.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarViewPickerModule} from './shared/calendar-view-picker/calendar-view-picker.module';
import {ManageEventModalModule} from './shared/manage-event-modal/manage-event-modal.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    CalendarModule.forRoot({provide: DateAdapter, useFactory: adapterFactory}),
    StoreModule.forRoot({
      events: eventsReducer,
      users: usersReducer,
    }),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    UserPickerModule,
    CalendarDisplayModule,
    CalendarViewPickerModule,
    ManageEventModalModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

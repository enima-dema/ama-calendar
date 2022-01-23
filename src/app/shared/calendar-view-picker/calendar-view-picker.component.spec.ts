import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarViewPickerComponent } from './calendar-view-picker.component';
import {TranslateModule} from '@ngx-translate/core';

describe('CalendarViewPickerComponent', () => {
  let component: CalendarViewPickerComponent;
  let fixture: ComponentFixture<CalendarViewPickerComponent>;
  let el: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CalendarViewPickerComponent,
      ], imports: [
        TranslateModule.forRoot(),
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarViewPickerComponent);
    component = fixture.componentInstance;
    el = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the right method when the button is clicked', () => {
    spyOn(component, 'setView');
    const buttons = el.querySelectorAll('button');
    expect(buttons.length).toEqual(3);
    buttons[0].click();
    expect(component.setView).toHaveBeenCalledWith(component.monthView);
    buttons[1].click();
    expect(component.setView).toHaveBeenCalledWith(component.weekView);
    buttons[2].click();
    expect(component.setView).toHaveBeenCalledWith(component.dayView);
  });

  it('should trigger the event emitter when set view is called', () => {
    spyOn(component.viewEmitter, 'emit');
    const buttons = el.querySelectorAll('button');
    buttons[0].click();
    expect(component.viewEmitter.emit).toHaveBeenCalledWith(component.monthView);
  });
});

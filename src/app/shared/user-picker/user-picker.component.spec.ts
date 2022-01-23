import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {UserPickerComponent} from './user-picker.component';
import {TranslateModule} from '@ngx-translate/core';
import {ColorPelletModule} from '../color-pellet/color-pellet.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';

describe('UserPickerComponent', () => {
  let component: UserPickerComponent;
  let fixture: ComponentFixture<UserPickerComponent>;
  let el: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        UserPickerComponent
      ],
      imports: [
        TranslateModule.forRoot(),
        ColorPelletModule,
        NgbDropdownModule,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPickerComponent);
    component = fixture.componentInstance;
    el = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the provided users', waitForAsync(async () => {
    component.users = [
      {id: 1, colorInHex: '#FF5733', name: 'AurosTEST'},
      {id: 2, colorInHex: '#979911', name: 'ThaerielTEST'},
      {id: 3, colorInHex: '#862699', name: 'MalissusTEST'},
    ];
    fixture.detectChanges();
    el.querySelector('button').click();
    await fixture.whenStable();
    const items = el.querySelectorAll('.item');
    expect(items.length).toBe(3);
    expect(items[0].innerHTML).toContain('AurosTEST');
    expect(items[1].innerHTML).toContain('ThaerielTEST');
    expect(items[2].innerHTML).toContain('MalissusTEST');
  }));
});

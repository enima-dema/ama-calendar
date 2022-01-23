import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ManageEventModalComponent} from './manage-event-modal.component';
import {NgbActiveModal, NgbDatepickerModule, NgbModalModule, NgbTimepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';

describe('ManageEventModalComponent', () => {
  let component: ManageEventModalComponent;
  let fixture: ComponentFixture<ManageEventModalComponent>;
  let el: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ManageEventModalComponent
      ],
      imports: [
        NgbModalModule,
        NgbDatepickerModule,
        NgbTimepickerModule,
        FormsModule,
        TranslateModule.forRoot()
      ],
      providers: [
        NgbActiveModal,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEventModalComponent);
    component = fixture.componentInstance;
    component.event = {
      id: 0,
      title: 'TEST_INIT',
      startDate: new Date(1989, 5, 13),
      userId: 1,
    };
    el = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have as a event\'s name the one inputted', waitForAsync(async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    const titleInput = el.querySelector('#eventTitleId');
    titleInput.value = 'TEST1';
    titleInput.dispatchEvent(new Event('input'));
    expect(component.title).toBe('TEST1',
      'The component\'s event should have as a title TEST1');
  }));

  it('should have as inputted the event\'s name', waitForAsync(async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    const titleInput = el.querySelector('#eventTitleId');
    expect(titleInput.value).toBe('TEST_INIT',
      'The component\'s event should have inputted the event\'s name.');
  }));

  it('should call the close method when the cancel or the close button are clicked', waitForAsync(() => {
    spyOn(component.modalInstance, 'close');
    fixture.detectChanges();
    const cancelButton = el.querySelector('#cancelButton');
    cancelButton.click();
    expect(component.modalInstance.close).toHaveBeenCalled();
  }));

  it('should have the save button as disabled when the form is invalid', waitForAsync(async () => {
    component.title = '';
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    const saveButton = el.querySelector('#saveButton');
    expect(saveButton.disabled).toBeTruthy('The save button should be disabled if the form is invalid');
  }));

  it('should have the deletion button as visible in an edition case', waitForAsync(async () => {
    component.event.id = 1;
    fixture.detectChanges();
    let deleteButton = el.querySelector('#deleteButton');
    expect(deleteButton).toBeDefined('The delete button should be visible in an edition case');
    delete component.event.id;
    fixture.detectChanges();
    deleteButton = el.querySelector('#deleteButton');
    expect(deleteButton).toBeNull('The delete button should NOT be visible in a creation case');
  }));
});

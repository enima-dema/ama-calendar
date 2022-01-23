import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ColorPelletComponent} from './color-pellet.component';
import {TranslateModule} from '@ngx-translate/core';

describe('ColorPelletComponent', () => {
  let component: ColorPelletComponent;
  let fixture: ComponentFixture<ColorPelletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ColorPelletComponent
      ],
      imports: [
        TranslateModule.forRoot(),
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPelletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the right color', () => {
    component.colorInHex = '#862699';
    fixture.detectChanges();
    const template = fixture.nativeElement.querySelector('div');
    expect(template.style.backgroundColor).toEqual('rgb(134, 38, 153)');
  });
});

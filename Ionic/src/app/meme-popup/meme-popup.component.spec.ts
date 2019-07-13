import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemePopupComponent } from './meme-popup.component';

describe('MemePopupComponent', () => {
  let component: MemePopupComponent;
  let fixture: ComponentFixture<MemePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemePopupComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

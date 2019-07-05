import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeModalPage } from './meme-modal.page';

describe('MemeModalPage', () => {
  let component: MemeModalPage;
  let fixture: ComponentFixture<MemeModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemeModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemeModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqdescriptionPage } from './faqdescription.page';

describe('FaqdescriptionPage', () => {
  let component: FaqdescriptionPage;
  let fixture: ComponentFixture<FaqdescriptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqdescriptionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqdescriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

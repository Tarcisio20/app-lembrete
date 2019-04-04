import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryPagePage } from './primary-page.page';

describe('PrimaryPagePage', () => {
  let component: PrimaryPagePage;
  let fixture: ComponentFixture<PrimaryPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SobrePagePage } from './sobre-page.page';

describe('SobrePagePage', () => {
  let component: SobrePagePage;
  let fixture: ComponentFixture<SobrePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobrePagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobrePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

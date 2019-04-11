import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LembreteIndividualPagePage } from './lembrete-individual-page.page';

describe('LembreteIndividualPagePage', () => {
  let component: LembreteIndividualPagePage;
  let fixture: ComponentFixture<LembreteIndividualPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LembreteIndividualPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LembreteIndividualPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

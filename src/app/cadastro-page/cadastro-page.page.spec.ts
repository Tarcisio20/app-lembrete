import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPagePage } from './cadastro-page.page';

describe('CadastroPagePage', () => {
  let component: CadastroPagePage;
  let fixture: ComponentFixture<CadastroPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ControllerPageService } from './controller-page.service';

describe('ControllerPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ControllerPageService = TestBed.get(ControllerPageService);
    expect(service).toBeTruthy();
  });
});

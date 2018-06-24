import { TestBed, inject } from '@angular/core/testing';

import { WebManagerFormService } from './web-manager-form.service';

describe('WebManagerFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebManagerFormService]
    });
  });

  it('should be created', inject([WebManagerFormService], (service: WebManagerFormService) => {
    expect(service).toBeTruthy();
  }));
});

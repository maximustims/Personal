import { TestBed, inject } from '@angular/core/testing';

import { SettingManagerService } from './setting-manager.service';

describe('SettingManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SettingManagerService]
    });
  });

  it('should be created', inject([SettingManagerService], (service: SettingManagerService) => {
    expect(service).toBeTruthy();
  }));
});

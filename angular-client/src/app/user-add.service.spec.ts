import { TestBed } from '@angular/core/testing';

import { UserAddService } from './user-add.service';

describe('UserAddService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserAddService = TestBed.get(UserAddService);
    expect(service).toBeTruthy();
  });
});

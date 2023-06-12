import { TestBed } from '@angular/core/testing';

import { PersonalInfosService } from './aboutme.service';

describe('PersonalInfosService', () => {
  let service: PersonalInfosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalInfosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

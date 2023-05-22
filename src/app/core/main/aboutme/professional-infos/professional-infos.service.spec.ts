import { TestBed } from '@angular/core/testing';

import { ProfessionalInfosService } from './professional-infos.service';

describe('ProfessionalInfosService', () => {
  let service: ProfessionalInfosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessionalInfosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

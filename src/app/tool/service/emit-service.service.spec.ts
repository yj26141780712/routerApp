import { TestBed, inject } from '@angular/core/testing';

import { EmitServiceService } from './emit-service.service';

describe('EmitServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmitServiceService]
    });
  });

  it('should be created', inject([EmitServiceService], (service: EmitServiceService) => {
    expect(service).toBeTruthy();
  }));
});

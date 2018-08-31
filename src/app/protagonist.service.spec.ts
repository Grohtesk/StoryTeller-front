import { TestBed, inject } from '@angular/core/testing';

import { ProtagonistService } from './protagonist.service';

describe('ProtagonistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProtagonistService]
    });
  });

  it('should be created', inject([ProtagonistService], (service: ProtagonistService) => {
    expect(service).toBeTruthy();
  }));
});

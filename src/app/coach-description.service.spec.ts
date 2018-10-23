import { TestBed, inject } from '@angular/core/testing';

import { CoachDescriptionService } from './coach-description.service';

describe('CoachDescriptionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoachDescriptionService]
    });
  });

  it('should be created', inject([CoachDescriptionService], (service: CoachDescriptionService) => {
    expect(service).toBeTruthy();
  }));
});

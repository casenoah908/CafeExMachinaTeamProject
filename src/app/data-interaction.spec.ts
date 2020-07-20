import { TestBed } from '@angular/core/testing';

import { DataInteractionService } from './data-interaction.service';

describe('DataInteractionService', () => {
  let service: DataInteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataInteractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
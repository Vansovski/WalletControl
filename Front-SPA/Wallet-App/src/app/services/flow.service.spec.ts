/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FlowService } from './flow.service';

describe('Service: Flow', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlowService]
    });
  });

  it('should ...', inject([FlowService], (service: FlowService) => {
    expect(service).toBeTruthy();
  }));
});

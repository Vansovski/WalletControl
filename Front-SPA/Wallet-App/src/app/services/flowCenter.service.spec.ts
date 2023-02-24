/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FlowCenterService } from './flowCenter.service';

describe('Service: FlowCenter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlowCenterService]
    });
  });

  it('should ...', inject([FlowCenterService], (service: FlowCenterService) => {
    expect(service).toBeTruthy();
  }));
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HelloServiceService } from './hello-service.service';

describe('HelloServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HelloServiceService]
    });
  });

  it('should ...', inject([HelloServiceService], (service: HelloServiceService) => {
    expect(service).toBeTruthy();
  }));
});

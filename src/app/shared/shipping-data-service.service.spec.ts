import { TestBed } from '@angular/core/testing';

import { ShippingDataServiceService } from './shipping-data-service.service';

describe('ShippingDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShippingDataServiceService = TestBed.get(ShippingDataServiceService);
    expect(service).toBeTruthy();
  });
});

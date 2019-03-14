import { Component, OnInit } from '@angular/core';
import { ShippingDataServiceService, ShippingData } from '../shipping-data-service.service';

@Component({
  selector: 'app-shipping-option',
  templateUrl: './shipping-option.component.html',
  styleUrls: ['./shipping-option.component.css']
})
export class ShippingOptionComponent implements OnInit {

  shippingData:ShippingData;
  constructor(private shippingDataService: ShippingDataServiceService) { 
    this.shippingData = shippingDataService.shippingData;
  }


  ngOnInit() {
  
  }

}

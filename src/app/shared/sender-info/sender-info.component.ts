import { Component, OnInit } from '@angular/core';
import { ShippingData, ShippingDataServiceService } from '../shipping-data-service.service';

@Component({
  selector: 'app-sender-info',
  templateUrl: './sender-info.component.html',
  styleUrls: ['./sender-info.component.css']
})
export class SenderInfoComponent implements OnInit {

  shippingData:ShippingData;
  constructor(private shippingDataService: ShippingDataServiceService) { 
    this.shippingData = shippingDataService.shippingData;
  }

  ngOnInit() {
    console.log(this.shippingData)
  }

}

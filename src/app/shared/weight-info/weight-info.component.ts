import { Component, OnInit } from '@angular/core';
import { ShippingDataServiceService ,ShippingData} from '../shipping-data-service.service';

@Component({
  selector: 'app-weight-info',
  templateUrl: './weight-info.component.html',
  styleUrls: ['./weight-info.component.css']
})
export class WeightInfoComponent implements OnInit {

  shippingData:ShippingData;
  constructor(private shippingDataService: ShippingDataServiceService) { 
    this.shippingData = shippingDataService.shippingData;
  }

  ngOnInit() {
  }
}

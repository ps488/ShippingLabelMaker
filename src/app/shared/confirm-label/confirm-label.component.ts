import { Component, OnInit } from '@angular/core';
import { ShippingDataServiceService, ShippingData } from '../shipping-data-service.service';
import { HighlightDelayBarrier } from 'blocking-proxy/built/lib/highlight_delay_barrier';

@Component({
  selector: 'app-confirm-label',
  templateUrl: './confirm-label.component.html',
  styleUrls: ['./confirm-label.component.css']
})
export class ConfirmLabelComponent implements OnInit {

  shippingData:ShippingData;
  constructor(private shippingDataService: ShippingDataServiceService) { 
    this.shippingData = shippingDataService.shippingData;
  }

  public shippingCost : number;
  private showPrint:boolean = false;

  shippingOption: any = {
    ground: 'Ground',
    priority: 'Priority'
  }
  
  public calculateShippingCost() {
    debugger;
    const shippingRate = 0.40;
    this.shippingCost = 
    this.shippingData.weight * shippingRate * (this.shippingData.shippingOptions === this.shippingOption.ground ? 1 : 1.5);
    return this.showPrint = true;
  }

  public printLabel(){
    window.print();
  }

  ngOnInit() {
    
    console.log(this.shippingData)
  
  }

}

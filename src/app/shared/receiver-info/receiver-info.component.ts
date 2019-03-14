import { Component, OnInit } from '@angular/core';
import { ShippingDataServiceService, ShippingData } from '../shipping-data-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-receiver-info',
  templateUrl: './receiver-info.component.html',
  styleUrls: ['./receiver-info.component.css']
})
export class ReceiverInfoComponent implements OnInit {
  shippingData:ShippingData;
  
  receiverForm: FormGroup;
  nextLink = false

  constructor(private formBuilder: FormBuilder, private shippingDataService: ShippingDataServiceService) { 
    this.shippingData = shippingDataService.shippingData;
  }


  //TODO: Form validations
  ngOnInit() {
    // this.receiverForm = this.formBuilder.group({
    //     name: ['', Validators.required],
    //     street: ['', Validators.required],
    //     state: ['', Validators.required],
    //     city: ['', Validators.required],
    //     zip:['',Validators.required]
    // });
}


}

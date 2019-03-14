import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shipping-label-maker',
  templateUrl: './shipping-label-maker.component.html',
  styleUrls: ['./shipping-label-maker.component.css']
})
export class ShippingLabelMakerComponent implements OnInit {


  shippingInfo: {
    sender:{
      name: string;
      street: string;
      city: string;
      state: string;
      zip: number;
    }
    receiver:{
      name: string;
      street: string;
      city: string;
      state: string;
      zip: number;
    }
    weight: number;
    shippingOption: number;
  } 

  // @Input()

  //   get getReceiverInfo(){
  //       return this.shippingInfo.receiver
  //   }

  //   set getReceiverInfo(val){
  //       this.shippingInfo.receiver = val;
  //       console.log(this.shippingInfo);
  //   }
  
  
  ngOnInit() {
  console.log('ngOnInit ran...')
  // this.shippingInfo = {
  //   sender : {
  //     name: 'John Smith',
  //     street: '131 Dartmouth St',
  //     city:'Boston',
  //     state: 'MA',
  //     zip: 0o2116
  //   }, 
  //   receiver:{
  //     name: 'Linda Jackson',
  //     street: '40 Fulton St',
  //     city: 'New York',
  //     state:'NY',
  //     zip: 30038
  //   },
  //   weight: 2,
  //   shippingOption: 1
  // }
 

  }


  constructor() { }

}

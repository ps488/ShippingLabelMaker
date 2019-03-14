import { Injectable } from '@angular/core';
import { formGroupNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

export interface ShippingData {
  sender: {
    name: string;
    street: string;
    city: string;
    state: string;
    zip: string;
  }
  receiver: {
    name: string;
    street: string;
    city: string;
    state: string;
    zip: string;
  }
  weight: number;
  shippingOptions: {
    ground: string,
    priority: string
  }
}

// export enum shippingOption{
//   ground = 1,
//   priority = 2
// }

@Injectable({
  providedIn: 'root'
})

export class ShippingDataServiceService {
  shippingData: ShippingData = {
    sender: {
      name: '',
      street: '',
      city: '',
      state: '',
      zip: ''
    },
    receiver: {
      name: '',
      street: '',
      city: '',
      state: '',
      zip: ''
    },
    weight: 0,
    shippingOptions: {
      ground: 'Ground',
      priority: 'Priority'
    }

  };
  constructor() {

  }
};




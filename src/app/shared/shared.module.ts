import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes } from '@angular/router';

import { WizardComponent } from './wizard/wizard.component';
import { SenderInfoComponent } from './sender-info/sender-info.component';
import { ReceiverInfoComponent } from './receiver-info/receiver-info.component';
import { WeightInfoComponent } from './weight-info/weight-info.component';
import { ShippingOptionComponent } from './shipping-option/shipping-option.component';
import { ConfirmLabelComponent } from './confirm-label/confirm-label.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {
    path: '', component: ReceiverInfoComponent
  },
  {
    path: 'sender', component: SenderInfoComponent
  },
  {
    path:'shippingweight', component: WeightInfoComponent
  },
  {
    path: 'shippingoption', component: ShippingOptionComponent
  },
  {
    path: 'confirm', component: ConfirmLabelComponent
  }
]

@NgModule({
  declarations: [
    WizardComponent,
     SenderInfoComponent, 
     ReceiverInfoComponent, 
     WeightInfoComponent, 
     ShippingOptionComponent, 
     ConfirmLabelComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    WizardComponent,
    SenderInfoComponent,
    ReceiverInfoComponent, 
    WeightInfoComponent,
    ShippingOptionComponent,
    ConfirmLabelComponent,
    RouterModule
  ]
})
export class SharedModule { }

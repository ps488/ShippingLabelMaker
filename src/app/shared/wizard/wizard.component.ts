import { Component, OnInit } from '@angular/core';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router, NavigationEnd } from '@angular/router';
import { setPreviousOrParentTNode } from '@angular/core/src/render3/state';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {

  nextLink = null;
  prevLink = null;
  

  steps = [
    '/',
    '/sender',
    '/shippingweight',
    '/shippingoption',
    '/confirm'
  ];

   constructor(private router: Router) {

   // listen to events from Router
   this.router.events.subscribe(event => {
    if(event instanceof NavigationEnd) {
      // event is an instance of NavigationEnd, get url!  
      const url = event.urlAfterRedirects;
      let idx = this.steps.indexOf(url.toLowerCase());
      this.nextLink = null;
      this.prevLink = null;
      if(idx !== 0) {
        this.prevLink = this.steps[idx-1];
        console.log('prev' + idx)
      }
      if(idx < this.steps.length -1) {
        this.nextLink = this.steps[idx+1];
        console.log('next' + idx)
      }
    }
  })
  }


  ngOnInit() {

    console.log(this.router.url)
    //console.log('NEXT' + this.nextLink)
    this.nextLink = 'sender';
  

  }


  

}

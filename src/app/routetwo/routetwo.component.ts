import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routetwo',
  templateUrl: './routetwo.component.html',
  styleUrls: ['./routetwo.component.css']
})
export class RoutetwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // On button click, send a gtag event click
  registerClick = () => {
    (<any>window).gtag('event', 'click', {
      'event_category': 'Click',
      'event_label': 'Button',
      'value': 'Page 1'
    });
   }

}

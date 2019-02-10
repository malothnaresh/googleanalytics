import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routeone',
  templateUrl: './routeone.component.html',
  styleUrls: ['./routeone.component.css']
})
export class RouteoneComponent implements OnInit {

  constructor() {
  }

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

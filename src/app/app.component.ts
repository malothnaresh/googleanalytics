import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

// declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'google-analytics';
  constructor(private router: Router) {

    // Following is the router subscription. It sends gtag a pageview event.
    this.router.events.subscribe(event => {
     if (event instanceof NavigationEnd) {
       (<any>window).gtag('set', 'page', event.urlAfterRedirects);
       (<any>window).gtag('send', 'pageview');
     }
   });
 }

 // On button click, send a gtag event click
 sendEvent = () => {
  (<any>window).gtag('event', 'click', {
    'event_category': 'Click',
    'event_label': 'Button',
    'value': 'Button Click Event'
  });
 }
}

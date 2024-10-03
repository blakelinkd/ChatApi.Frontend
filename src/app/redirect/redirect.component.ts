import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-redirect',
  template: `<p>Redirecting...</p>`,  // You can customize this message or add a spinner
})
export class RedirectComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      const redirectUrl = data['url'];
      
      // Track the event in Google Analytics
      if ((window as any)['gtag']) {
        (window as any)['gtag']('event', 'click', {
          'event_category': 'Link',
          'event_label': redirectUrl,
          'value': 1
        });
      }
  
      // Redirect after a delay
      setTimeout(() => {
        window.location.href = redirectUrl;
      }, 500);
    });
  }
  
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

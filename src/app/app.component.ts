import { Component } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  
  title = 'angular';

    // Sets initial value to true to show loading spinner on first load
    loading = true;

    constructor(private router: Router) {
      router.events.subscribe((event: RouterEvent) => {
        this.navigationInterceptor(event);
      });
    }
    // Shows and hides the loading spinner during RouterEvent changes
    navigationInterceptor(event: RouterEvent): void {
      if (event instanceof NavigationStart) {
        this.loading = true;
      }
      if (event instanceof NavigationEnd) {
        setTimeout(() => { // here
          this.loading = false;
        }, 2000);
      }

      // Set loading state to false in both of the below events to hide the spinner in case a request fails
      if (event instanceof NavigationCancel) {
        setTimeout(() => { // here
          this.loading = false;
        }, 2000);
      }
      if (event instanceof NavigationError) {
        setTimeout(() => { // here
          this.loading = false;
        }, 2000);
      }
  }
}

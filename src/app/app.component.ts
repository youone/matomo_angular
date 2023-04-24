import { Component } from '@angular/core';
import { MatomoTracker } from '@ngx-matomo/tracker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private readonly tracker: MatomoTracker) {}
  title = 'matomo';
  ngOnInit() {
    this.tracker.trackPageView();
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxMatomoTrackerModule } from '@ngx-matomo/tracker';
import { NgxMatomoRouterModule } from '@ngx-matomo/router';

console.log('ver: ', 2)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxMatomoTrackerModule.forRoot({ trackerUrl: 'https://you1.matomo.cloud/matomo.php', siteId: '1', scriptUrl: 'https://you1.matomo.cloud/matomo.js' }),
    NgxMatomoRouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

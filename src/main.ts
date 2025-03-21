/// <reference types="@angular/localize" />

import {bootstrapApplication, provideProtractorTestingSupport} from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import {AppComponent} from './app/app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error("error:#%d",err));

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    { provide: LocationStrategy, useClass: HashLocationStrategy }, // ✅ THIS WORKS
  ],
});


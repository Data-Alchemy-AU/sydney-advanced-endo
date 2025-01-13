import { ApplicationConfig } from '@angular/core';
import { provideRouter , Routes} from '@angular/router';
import {provideClientHydration, provideProtractorTestingSupport} from '@angular/platform-browser';
import {routes} from "./app.routes";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


// export const appConfig: ApplicationConfig = {
//   providers: [provideRouter(routes), provideClientHydration()]
// };
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideProtractorTestingSupport(),
    provideClientHydration(), provideAnimationsAsync()
  ],
};

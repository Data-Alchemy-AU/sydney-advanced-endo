import { ApplicationConfig } from '@angular/core';
import { provideRouter , Routes} from '@angular/router';
import {provideClientHydration, provideProtractorTestingSupport} from '@angular/platform-browser';
import {routes} from "./app.routes";


// export const appConfig: ApplicationConfig = {
//   providers: [provideRouter(routes), provideClientHydration()]
// };
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideProtractorTestingSupport(),
    provideClientHydration()
  ],
};

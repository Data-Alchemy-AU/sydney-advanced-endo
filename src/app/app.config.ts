import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter , Routes} from '@angular/router';
import {provideClientHydration, provideProtractorTestingSupport} from '@angular/platform-browser';
import {routes} from "./app.routes";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from "@angular/common/http";


// export const appConfig: ApplicationConfig = {
//   providers: [provideRouter(routes), provideClientHydration()]
// };
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideProtractorTestingSupport(),
    provideHttpClient(
      withFetch(),
    ),
    provideClientHydration(), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync()
  ],
};

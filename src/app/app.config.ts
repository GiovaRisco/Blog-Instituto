import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HashLocationStrategy, IMAGE_CONFIG, LocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), {provide: LocationStrategy , useClass: HashLocationStrategy} , { provide: IMAGE_CONFIG , useValue : {
    disableImageSizeWarning: true, 
    disableImageLazyLoadWarning: true
  }}]
};

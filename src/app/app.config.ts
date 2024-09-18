import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideToastr } from 'ngx-toastr';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { errorIntercepter } from './interceptor/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideToastr(),provideAnimations(),provideHttpClient(withInterceptors([errorIntercepter]))]
};
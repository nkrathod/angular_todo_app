import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

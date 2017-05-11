import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

//import { $ } from '@types/jquery';

platformBrowserDynamic().bootstrapModule(AppModule);
//console.log($);
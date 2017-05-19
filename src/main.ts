import '../node_modules/normalize.css/normalize.css';
import '../node_modules/perfect-scrollbar/dist/css/perfect-scrollbar.min.css';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import AppModule from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule);

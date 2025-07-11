import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app-module';
import 'intl-tel-input/build/js/intlTelInput.min.js';
import 'intl-tel-input/build/css/intlTelInput.css';

platformBrowser().bootstrapModule(AppModule, {
  
})
  .catch(err => console.error(err));

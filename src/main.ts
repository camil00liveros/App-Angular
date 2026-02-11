import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import './app/componentes/card.js';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

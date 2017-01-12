// Polyfills ---------------------------------
import 'core-js/client/shim';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';

// Angular ------------------------------------
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import 'rxjs';

// Local ---------------------------------------
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RootModule } from './root-module';

platformBrowserDynamic().bootstrapModule(RootModule);

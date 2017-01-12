import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import app from './features/app';

const { App } = app.components;

@NgModule({
  bootstrap: [App],
  declarations: [App],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
  ],
})
export class RootModule {}

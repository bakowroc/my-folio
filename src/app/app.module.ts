import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './App.component';
import { ContentBox } from './ContentBox/ContentBox.component';

@NgModule({
  bootstrap: [App],
  declarations: [
    App,
    ContentBox
  ],
  imports: [
    BrowserModule
  ]
})

export default class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgFoundryModelsModule } from '../../node_modules/ng-foundry-models';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgFoundryModelsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

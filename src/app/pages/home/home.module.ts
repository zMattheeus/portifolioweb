import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
  ],



  providers: [],
  bootstrap: [],
  exports: [
    HomeComponent,
    HeaderComponent
  ]
})
export class HomeModule { }

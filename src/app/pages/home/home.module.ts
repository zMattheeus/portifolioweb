import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { HamburgerComponent } from 'src/app/shared/hamburger/hamburger.component';
import { MainComponent } from 'src/app/shared/main/main.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    HamburgerComponent,
    MainComponent
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

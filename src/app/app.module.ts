import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { HamburgerComponent } from './shared/hamburger/hamburger.component';
import { MainComponent } from './shared/main/main.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjetoComponent } from './pages/projeto/projeto.component';
import { ContatoComponent } from './pages/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HamburgerComponent,
    MainComponent,
    SobreComponent,
    SkillsComponent,
    ProjetoComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

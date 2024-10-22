import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './components/home/home.component';
import {MatCardModule} from "@angular/material/card";
import {StartupModule} from "./components/startups/startup.module";
import {HeaderComponent} from './components/shared/header/header.component';
import {DetalheStartupComponent} from "./components/startups/detalhe-startup/detalhe-startup.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {LandingComponent} from './components/landing/landing.component';
import {FormsModule} from "@angular/forms";
import { RecomendacaoComponent } from './components/recomendacao/recomendacao.component';
import { ContatoComponent } from './components/shared/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DetalheStartupComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    StartupModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

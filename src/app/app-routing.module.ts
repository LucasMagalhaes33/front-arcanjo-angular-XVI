import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {DetalheStartupComponent} from "./components/startups/detalhe-startup/detalhe-startup.component";
import {HomeComponent} from "./components/home/home.component";
import {LandingComponent} from "./components/landing/landing.component";

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full'
  },
  {
    path: 'startups',
    loadChildren: () => import('./components/startups/startup.module').then(p => p.StartupModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then(p => p.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then(p => p.LoginModule)
  },
  {
    path: 'recomendacao',
    loadChildren: () => import('./components/recomendacao/recomendacao.module').then(p => p.RecomendacaoModule)
  },
  {
    path: 'contato',
    loadChildren: () => import('./components/shared/contato/contato.module').then(p => p.ContatoModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./components/shared/payment/payment.module').then(p => p.PaymentModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

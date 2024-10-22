import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "../login/login.component";
import {RecomendacaoComponent} from "./recomendacao.component";

const routes: Routes = [
  {
    path: '',
    component: RecomendacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecomendacaoRoutingModule { }

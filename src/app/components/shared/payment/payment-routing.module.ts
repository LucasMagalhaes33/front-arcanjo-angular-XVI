import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContatoComponent} from "../contato/contato.component";
import {PaymentComponent} from "./payment.component";

const routes: Routes = [
  {
    path: '',
    component: PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }

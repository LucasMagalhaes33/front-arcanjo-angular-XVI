import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {DetalheStartupComponent} from "./detalhe-startup/detalhe-startup.component";


const routes: Routes = [
  {
    path: 'startup-details/:id',
    component: DetalheStartupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartupRoutingModule { }

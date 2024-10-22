import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RecomendacaoRoutingModule} from './recomendacao-routing.module';
import {RecomendacaoComponent} from "./recomendacao.component";
import {MatCardModule} from "@angular/material/card";
import {AppModule} from "../../app.module";


@NgModule({
    declarations: [RecomendacaoComponent],
    imports: [
        CommonModule,
        RecomendacaoRoutingModule,
        MatCardModule
    ]
})
export class RecomendacaoModule {
}

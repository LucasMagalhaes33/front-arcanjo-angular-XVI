import { Component } from '@angular/core';
import {StartupService} from "../../../services/startup.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detalhe-startup',
  templateUrl: './detalhe-startup.component.html',
  styleUrls: ['./detalhe-startup.component.scss']
})
export class DetalheStartupComponent {
  startup: any;
  progressPercentage: number = 0;

  constructor(private route: ActivatedRoute, private startupService: StartupService) { }

  ngOnInit(): void {
    const id = +(this.route.snapshot.paramMap.get('id') || 0);
    this.getStartupDetails(id);
  }

  getStartupDetails(id: number): void {
    this.startupService.getStartupById(id).subscribe((data: any) => {
      this.startup = data;
    }, error => {
      console.error('Erro ao carregar startup', error);
    });
  }

  apoiarProjeto(): void {
    // Lógica para apoiar o projeto (pode ser redirecionar ou abrir modal de pagamento)
    alert('Obrigado por apoiar!');
  }
}

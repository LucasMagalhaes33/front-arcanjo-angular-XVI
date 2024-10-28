import { Component } from '@angular/core';
import {StartupService} from "../../../services/startup.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detalhe-startup',
  templateUrl: './detalhe-startup.component.html',
  styleUrls: ['./detalhe-startup.component.scss']
})
export class DetalheStartupComponent {
  startup: any;
  progressPercentage: number = 0;

  constructor(private route: ActivatedRoute, private startupService: StartupService, private router: Router) { }

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

  contatoWpp(): void {
    // Redireciona para o WhatsApp Web com o seu número
    const whatsappUrl = 'https://web.whatsapp.com/send?phone=+5591985645497&text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20o%20projeto!';
    window.open(whatsappUrl, '_blank');
  }

  apoiarProjeto(): void {
    // Redireciona para a página de pagamento com o valor da meta como parâmetro
    this.router.navigate(['/payment'], { queryParams: { valor: this.startup.valorProcurado,nome: this.startup.nome,
        setor: this.startup.setor } });
  }
}

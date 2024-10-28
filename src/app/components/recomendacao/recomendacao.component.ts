import { Component } from '@angular/core';
import {StartupService} from "../../services/startup.service";
import {ActivatedRoute, Router} from "@angular/router";
import {InvestidorService} from "../../services/investidor.service";

@Component({
  selector: 'app-recomendacao',
  templateUrl: './recomendacao.component.html',
  styleUrls: ['./recomendacao.component.scss']
})
export class RecomendacaoComponent {
  startups: any[] = [];
  img = 'assets/logo.jpg';
  constructor(private investidorService: InvestidorService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Gera um número aleatório entre 1 e 30
    const randomId = Math.floor(Math.random() * 4) + 1;

    // Usa o ID aleatório na requisição
    this.investidorService.getRecomendacaoById(randomId).subscribe(
      data => {
        data.img = this.img;
        this.startups = data;
      },
      error => {
        console.error('Erro ao buscar startups', error);
      }
    );
  }

  goToDetails(id: number): void {
    this.router.navigate(['/startups/startup-details', id]);  // Redireciona para a rota de detalhes
  }

}

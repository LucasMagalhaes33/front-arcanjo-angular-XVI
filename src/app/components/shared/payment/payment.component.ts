import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  valorProcurado: number = 0;
  startup: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Recupera o valor passado como parâmetro na URL
    this.route.queryParams.subscribe(params => {
      this.valorProcurado = +params['valor'];
      this.startup = {
        nome: params['nome'],
        setor: params['setor']
      };
    });
  }

  confirmarPagamento(): void {
    // Lógica de pagamento (pode ser integração com um serviço de pagamento)
    alert('Pagamento confirmado! Obrigado pelo apoio.');
    // Redireciona de volta à página de detalhes ou a uma página de confirmação
    this.router.navigate(['/home']);
  }

  cancelarPagamento(): void {
    // Redireciona de volta para a página de detalhes da startup caso o pagamento seja cancelado
    this.router.navigate(['/startup-details', this.startup.id]);
  }
}

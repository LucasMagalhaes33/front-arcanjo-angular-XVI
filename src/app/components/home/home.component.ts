import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {StartupService} from "../../services/startup.service";
import {SidebarService} from "../../services/sidebar.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  startups: any[] = [];
  img = 'assets/logo.jpg';
  constructor(private startupService: StartupService, private router: Router, private route: ActivatedRoute, private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.startupService.getStartups().subscribe(
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

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

}

import { Component } from '@angular/core';
import {SidebarService} from "../../../services/sidebar.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private sidebarService: SidebarService, private router: Router) {}

  toggleSidebar() {
    // Check if the button click event is registered
    this.sidebarService.toggleSidebar();
    // Check if the visibility state is changing
  }

  navigateToLogin() {
    this.router.navigate(['/login']); // Certifique-se de que a rota '/login' está configurada no roteamento
  }

}

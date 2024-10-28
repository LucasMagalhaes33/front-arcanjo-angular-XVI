import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent {

  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['/home']);
  }
}

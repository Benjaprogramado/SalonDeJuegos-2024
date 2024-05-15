import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private router: Router) {}

  navegarAHome() {
    this.router.navigate(['/home']);
}

navegarAAbout() {
    this.router.navigate(['/quiensoy']);
}

navegarALogin() {
    this.router.navigate(['/login']);
}


}





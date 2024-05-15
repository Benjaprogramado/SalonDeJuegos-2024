import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { NavbarComponent } from "./componets/navbar/navbar.component";
import { FooterComponent } from './componets/footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, RouterLink, RouterLinkActive, NavbarComponent, FooterComponent]
})
export class AppComponent {
  title = 'SalaDeJuegos-2024';
}

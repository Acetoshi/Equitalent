import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-with-navbar-layout',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  styleUrls: ["../../app.component.css"],
  template: `
      <nav class="navbar">
      <figure class="logo">
        <img alt="logo equitalent avec le E dans une loupe" class="logo-compact" src="/greenCompactLogo.svg"/>
      </figure>
      <div class="nav-link">
        <a routerLink="" draggable=false>Accueil</a>
        <a routerLink="evaluation" routerLinkActive="active" draggable=false>Evaluation</a>
        <a routerLink="analysis" routerLinkActive="active" draggable=false> Analyses </a>
        <a routerLink="good-practises" routerLinkActive="active" draggable=false> Bonnes pratiques </a>
      </div>
    </nav>

  <router-outlet></router-outlet>`,
})
export class WithNavbarLayoutComponent {

}

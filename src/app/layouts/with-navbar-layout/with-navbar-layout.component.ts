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
        <h1>EQUITALENT</h1>
      </figure>
      <div class="nav-link">
        <a routerLink="" draggable=false>Acceuil</a>
        <a routerLink="evaluation" routerLinkActive="active" draggable=false>Evaluation</a>
        <a routerLink="analysis" routerLinkActive="active" draggable=false> Analyses </a>
        <a routerLink="good-practises" routerLinkActive="active" > Bonnes pratiques </a>
      </div>
    </nav>

  <router-outlet></router-outlet>`,
})
export class WithNavbarLayoutComponent {

}

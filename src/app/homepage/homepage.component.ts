import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-homepage",
  standalone: true,
  imports: [RouterModule],
  template: `
    <main class="homepage">
      <h2>E QUITALENT</h2>
      <h1>"Serez-vous le meilleur RH ?"</h1>
      <a
        class="button-accent button-accent-dark"
        routerLink="/evaluation"
        draggable="false"
        >Trouvez les CV qui matchent le mieux avec l'annonce !</a
      >
    </main>
  `,
  styleUrls: [`./homepage.component.css`],
})
export class HomepageComponent {}

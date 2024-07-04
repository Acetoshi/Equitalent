import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-homepage",
  standalone: true,
  imports: [RouterModule],
  template: `
    <main class="homepage">
      <img alt="" class="background-wave" src="/clearGreenWave.svg" />
      <div class="img-container">
        <img
          alt="logo equitalent avec le E dans une loupe"
          id="logo-loupe"
          src="/logoLoupe2.png"
        />
        <img
          alt="logo equitalent avec le E dans une loupe"
          id="logo-typographic"
          src="/logoText.svg"
          />
      </div>
      <section class="call-to-action">
        <h1>Serez-vous le meilleur RH ?</h1>
        <a
          class="button-accent button-accent-dark"
          routerLink="equitalent/evaluation"
          draggable="false"
          >Trouvez les CV qui matchent le mieux avec l'annonce !</a
        >
      </section>
    </main>
  `,
  styleUrls: [`./homepage.component.css`],
})
export class HomepageComponent {}

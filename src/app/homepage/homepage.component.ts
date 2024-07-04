import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-homepage",
  standalone: true,
  imports: [RouterModule],
  template: `
    <p>homepage works!</p>
    <a class="button-accent2" routerLink="equitalent/evaluation"
      >Trouvez le CV qui match à l’emploi.</a
    >
  `,
  styles: ``,
})
export class HomepageComponent {}

import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <nav class="navbar">
    <a href="/">Acceuil</a>
    <a href="/evaluation">Evaluation</a>
    <a href="/analysis"> Analyses </a>
    <a href="/good-practises"> Bonnes pratiques </a>
    </nav>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = "hackathon";
}

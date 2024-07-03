import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import "../styles.css";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  template: `
        <nav class="navbar">
      <figure class="avatar-connexion">
        <img class="avatar-img" src="https://ca.slack-edge.com/T6SG2QGG2-U06LCLAS952-84583a93af96-512" alt=""/>
        <h1>David Le Gall</h1>
      </figure>
      <div class="nav-link">
        <a href="/">Acceuil</a>
        <a href="/evaluation">Evaluation</a>
        <a href="/analysis"> Analyses </a>
        <a href="/good-practises"> Bonnes pratiques </a>
      </div>  
    </nav>

    <router-outlet />
  `,
  styleUrl: `./app.component.css`,
})
export class AppComponent {
  title = "hackathon";
}

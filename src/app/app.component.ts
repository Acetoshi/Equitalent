import { Component } from "@angular/core";
import { RouterOutlet, RouterModule } from "@angular/router";
import "../styles.css";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: ` <router-outlet></router-outlet> `,
})
export class AppComponent {
  title = "hackathon";
}

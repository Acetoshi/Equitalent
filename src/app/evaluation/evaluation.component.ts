import { Component, inject } from "@angular/core";
import evaluation from "./evaluation1.json";
import { SelectedcvsService } from "../services/selectedcvs.service";

@Component({
  selector: "app-evaluation",
  standalone: true,
  imports: [],
  templateUrl: "./evaluation.component.html",
  styleUrls: ["./evaluation.component.css"],
})
export class EvaluationComponent {
  cvs = evaluation[0].cvs;
  jobDescription = evaluation[0].jobDescription;

  data = inject(SelectedcvsService);

  onDislike(id: number): void {
    this.data.addToDisliked(id);
  }

  onLike(id: number): void {
    this.data.addToLiked(id);
  }
}

import { Component } from "@angular/core";
import evaluation from "./evaluation1.json";

@Component({
  selector: "app-evaluation",
  standalone: true,
  imports: [],
  templateUrl: "./evaluation.component.html",
  styleUrl: "./evaluation.component.css",
})
export class EvaluationComponent {
  cvs = evaluation.cvs;
  jobDescription = evaluation.jobDescription;
  dislikedCVs: number[] = [];
  likedCVs: number[] = [];

  onDislike(id: number): void {
    if (!this.dislikedCVs.includes(id)) {
      this.dislikedCVs.push(id);
    }
    console.log('dislikedCVs : ',this.dislikedCVs);
  }

  onLike(id: number): void {
    if (!this.likedCVs.includes(id)) {
      this.likedCVs.push(id);
    }
    console.log('likedCVs : ',this.likedCVs);
  }
}

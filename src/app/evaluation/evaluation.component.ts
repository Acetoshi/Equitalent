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
    } else {
      const index = this.dislikedCVs.indexOf(id);
      if (index > -1) {
        this.dislikedCVs.splice(index, 1);
      }
    }
    console.log("dislikedCVs : ", this.dislikedCVs);
  }

  onLike(id: number): void {
    if (!this.likedCVs.includes(id)) {
      this.likedCVs.push(id);
    } else {
      const index = this.likedCVs.indexOf(id);
      if (index > -1) {
        this.likedCVs.splice(index, 1);
      }
    }
  }
}

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
  cvs = evaluation.cvs;
  jobDescription = evaluation.jobDescription;
  dislikedCVs: number[] = [];

  data = inject(SelectedcvsService);

  onDislike(id: number): void {
    if (!this.dislikedCVs.includes(id)) {
      this.dislikedCVs.push(id);
    } else {
      const index = this.dislikedCVs.indexOf(id);
      if (index > -1) {
        this.dislikedCVs.splice(index, 1);
      }
    }
  }

  onLike(id: number): void {
    this.data.add(id);
    console.log(this.data.get());
  }
}

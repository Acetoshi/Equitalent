import { Component, OnInit, inject } from "@angular/core";
import { SelectedcvsService } from "../services/selectedcvs.service";

@Component({
  standalone: true,
  selector: "app-score",
  templateUrl: "./analysis.component.html",
  styleUrls: ["./analysis.component.css"],
})
export class AnalysisComponent implements OnInit {
  data = inject(SelectedcvsService)

  ngOnInit() {
    console.log(this.data.likedCVs);
  }
}

import { Component, OnInit, inject } from "@angular/core";
import { Quote } from "../analysis/analysis";
import { SelectedcvsService } from "../services/selectedcvs.service";

@Component({
  standalone: true,
  selector: "app-score",
  templateUrl: "./analysis.component.html",
  styleUrls: ["./analysis.component.css"],
  providers: [SelectedcvsService]
})
export class AnalysisComponent implements OnInit {
  title = "HTTP using native fetch API";
  url: string = "https://type.fit/api/quotes";
  quotes: Quote[] = [];
  data = inject(SelectedcvsService);

  ngOnInit() {
    console.log(this.data.likedCVs);
  }
}

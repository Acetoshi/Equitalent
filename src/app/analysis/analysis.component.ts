import { Component, OnInit, inject } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SelectedcvsService } from "../services/selectedcvs.service";

@Component({
  selector: "app-score",
  standalone: true,
  imports:[ RouterModule ],
  templateUrl: "./analysis.component.html",
  styleUrls: ["./analysis.component.css"],
})

export class AnalysisComponent implements OnInit {
  data = inject(SelectedcvsService)
  percentage: number = 0; // Initialiser le pourcentage
  gaugeTranslation: number = -90; // Initialiser la rotation de la jauge

  ngOnInit() {
    console.log("liked :",this.data.likedCVs,"disliked :",this.data.dislikedCVs);
    console.log(this.data.analysis())
   // stocker chaque résultat de data.analysis dans une variable.
  }


}


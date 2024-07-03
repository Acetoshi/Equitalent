import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-analysis',
  standalone: true,
  imports: [],
  templateUrl: './analysis.component.html',
  styles: ``
})

export class AnalysisComponent implements OnInit {
  analysisResult = ANALYSIS;

  ngOnInit(): void {
    console.table(this.analysisResult);
  }

}

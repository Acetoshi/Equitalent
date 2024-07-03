import { Component, OnInit } from '@angular/core';
import data from "./data.json";

@Component({
  selector: 'app-analysis',
  standalone: true,
  imports: [],
  templateUrl: './analysis.component.html',
  styles: ``
})

export class AnalysisComponent implements OnInit {

data = data; 

  ngOnInit(): void {
    console.log("ici les données du back");
  }

}

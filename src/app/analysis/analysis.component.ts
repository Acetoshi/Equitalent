import { Component, OnInit } from '@angular/core';
import { Quote } from "../analysis/analysis";

@Component({
  standalone: true,
  selector: 'app-score',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})

export class AnalysisComponent implements OnInit {
  title = 'HTTP using native fetch API';
  url: string = 'https://type.fit/api/quotes';
  quotes: Quote[] = [];

  ngOnInit() {
    console.log("coucou je suis oninit")
    fetch(this.url)
      .then(response => response.json())
      .then((data : Quote[]) => {
        this.quotes=data;
      })
      .then(() => console.log("ceci est fetch", this.quotes));
  }
}


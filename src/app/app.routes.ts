import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AnalysisComponent } from "./analysis/analysis.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { GoodpractisesComponent } from "./goodpractises/goodpractises.component";
import { EvaluationComponent } from "./evaluation/evaluation.component";

export const routes: Routes = [
  { path: "analysis", component: AnalysisComponent },
  { path: "good-practises", component: GoodpractisesComponent },
  { path: "evaluation", component: EvaluationComponent },
  { path: "home", component: HomepageComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

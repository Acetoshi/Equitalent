import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { GoodPractisesComponent } from './goodpractises/goodpractises.component';
import { WithNavbarLayoutComponent } from './layouts/with-navbar-layout/with-navbar-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'equitalent',
    component: WithNavbarLayoutComponent,
    children: [
      { path: 'evaluation', component: EvaluationComponent },
      { path: 'analysis', component: AnalysisComponent },
      { path: 'good-practises', component: GoodPractisesComponent }
    ]
  },
  // Rediriger les chemins inconnus vers la page d'accueil
  // { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

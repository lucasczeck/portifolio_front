import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './core/main/dashboard/dashboard.component';
import { AboutmeComponent } from './core/main/aboutme/aboutme.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'sobremim', component: AboutmeComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

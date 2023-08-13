import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './core/main/dashboard/dashboard.component';
import { AboutmeComponent } from './core/main/aboutme/aboutme.component';
import { ProjectsComponent } from './core/main/projects/projects.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'sobremim', component: AboutmeComponent},
  {path: 'projetos', component: ProjectsComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './core/main/dashboard/dashboard.component';
import { AboutmeComponent } from './core/main/aboutme/aboutme.component';
import { ProjectsComponent } from './core/main/projects/projects.component';
import { AdminComponent } from './admin/admin.component';
import { CoreComponent } from './core/core.component';
import { LoginComponent } from './admin/login/login.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { ProjectAdminComponent } from './admin/project-admin/project-admin.component';
import { AuthGuard } from './admin/guards/auth.guard';

const routes: Routes = [
  {
    path: '', 
    component: CoreComponent, 
    children: [
      {path: '', component: DashboardComponent},
      {path: 'sobremim', component: AboutmeComponent},
      {path: 'projetos', component: ProjectsComponent},
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', component: HomeAdminComponent},
      {path: 'projects', component: ProjectAdminComponent}
    ]
  },
  {
    path: 'admin/login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { SummaryComponent } from './core/main/dashboard/summary/summary.component';
import { DashboardComponent } from './core/main/dashboard/dashboard.component';
import { CardsComponent } from './core/main/dashboard/cards/cards.component';
import { CardsProjetosComponent } from './core/main/dashboard/cards/cards-projetos/cards-projetos.component';
import { CardProjetosPessoaisComponent } from './core/main/dashboard/cards/cards-projetos/card-projetos-pessoais/card-projetos-pessoais.component';
import { CardProjetosProfissionaisComponent } from './core/main/dashboard/cards/cards-projetos/card-projetos-profissionais/card-projetos-profissionais.component';
import { CardGithubComponent } from './core/main/dashboard/cards/card-github/card-github.component';
import { ProgressBarComponent } from './core/main/dashboard/cards/progress-bar/progress-bar.component';
import { FooterComponent } from './core/footer/footer.component';
import { NegativePositiveBarComponent } from './core/main/dashboard/cards/negative-positive-bar/negative-positive-bar.component';
import { AboutmeComponent } from './core/main/aboutme/aboutme.component';
import { ProjectsComponent } from './core/main/projects/projects.component';
import { AdminComponent } from './admin/admin.component';
import { CoreComponent } from './core/core.component';
import { LoginComponent } from './admin/login/login.component';
import { ProjectAdminComponent } from './admin/project-admin/project-admin.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SummaryComponent,
    DashboardComponent,
    CardsComponent,
    CardsProjetosComponent,
    CardProjetosPessoaisComponent,
    CardProjetosProfissionaisComponent,
    CardGithubComponent,
    ProgressBarComponent,
    FooterComponent,
    NegativePositiveBarComponent,
    AboutmeComponent,
    ProjectsComponent,
    AdminComponent,
    CoreComponent,
    LoginComponent,
    ProjectAdminComponent,
    HomeAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

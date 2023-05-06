import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/main/header/header.component';
import { SummaryComponent } from './core/main/summary/summary.component';
import { DashboardComponent } from './core/main/dashboard/dashboard.component';
import { CardsProjetosComponent } from './core/main/dashboard/cards-projetos/cards-projetos.component';
import { CardProjetosPessoaisComponent } from './core/main/dashboard/cards-projetos/card-projetos-pessoais/card-projetos-pessoais.component';
import { CardProjetosProfissionaisComponent } from './core/main/dashboard/cards-projetos/card-projetos-profissionais/card-projetos-profissionais.component';
import { CardGithubComponent } from './core/main/dashboard/card-github/card-github.component';
import { ProgressBarComponent } from './core/main/dashboard/progress-bar/progress-bar.component';
import { FooterComponent } from './core/main/footer/footer.component';
import { NegativePositiveBarComponent } from './core/main/dashboard/negative-positive-bar/negative-positive-bar.component';
import { AboutmeComponent } from './core/main/aboutme/aboutme.component';
import { PersonalInfosComponent } from './core/main/aboutme/personal-infos/personal-infos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SummaryComponent,
    DashboardComponent,
    CardsProjetosComponent,
    CardProjetosPessoaisComponent,
    CardProjetosProfissionaisComponent,
    CardGithubComponent,
    ProgressBarComponent,
    FooterComponent,
    NegativePositiveBarComponent,
    AboutmeComponent,
    PersonalInfosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

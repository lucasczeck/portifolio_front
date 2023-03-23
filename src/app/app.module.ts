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
import { CardProjetosPessoaisComponent } from './core/main/dashboard/card-projetos-pessoais/card-projetos-pessoais.component';
import { CardProjetosProfissionaisComponent } from './core/main/dashboard/card-projetos-profissionais/card-projetos-profissionais.component';
import { CardGithubComponent } from './core/main/dashboard/card-github/card-github.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SummaryComponent,
    DashboardComponent,
    CardProjetosPessoaisComponent,
    CardProjetosProfissionaisComponent,
    CardGithubComponent
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

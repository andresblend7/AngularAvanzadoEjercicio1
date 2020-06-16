import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { APP_ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './Shared/nopagefound/nopagefound.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { ProgressComponent } from './Pages/progress/progress.component';
import { Graph1Component } from './Pages/graph1/graph1.component';
import { HeaderComponent } from './Shared/header/header.component';
import { SidebarComponent } from './Shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './Shared/breadcrumbs/breadcrumbs.component';
import { PagesComponent } from './Pages/pages.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    DashboardComponent,
    ProgressComponent,
    Graph1Component,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    PagesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

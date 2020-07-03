import { RouterModule, Routes, Router } from '@angular/router'
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graph1Component } from './graph1/graph1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';




const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, data : { pageName : "DashBoard" } },
            { path: 'progress', component: ProgressComponent,  data : { pageName : "Barras de progreso" } },
            { path: 'graph1', component: Graph1Component,  data : { pageName : "Gráficas" }},
            { path: 'promesas', component: PromesasComponent,  data : { pageName : "Promesas" } },
            { path: 'rxjs', component: RxjsComponent,  data : { pageName : "Observables" } },
            { path: 'account-settings', component: AccountSettingsComponent,  data : { pageName : "Ajustes de tema" } },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    },
];

export const PAGES_ROUTER = RouterModule.forChild(pagesRoutes)
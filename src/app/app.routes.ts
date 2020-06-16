import { RouterModule, Routes, Router } from '@angular/router'


import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './Pages/progress/progress.component';
import { Graph1Component } from './Pages/graph1/graph1.component';
import { NopagefoundComponent } from './Shared/nopagefound/nopagefound.component';
import { PagesComponent } from './Pages/pages.component';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graph1', component: Graph1Component },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NopagefoundComponent },

];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true })
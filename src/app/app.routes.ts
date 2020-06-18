import { RouterModule, Routes, Router } from '@angular/router'


import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './Shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
    // {
    //     path: '',
    //     component: PagesComponent,
    //     children: [
    //         { path: 'dashboard', component: DashboardComponent },
    //         { path: 'progress', component: ProgressComponent },
    //         { path: 'graph1', component: Graph1Component },
    //         { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    //     ]
    // },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NopagefoundComponent },

];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true })
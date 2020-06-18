import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms'

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graph1Component } from './graph1/graph1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../Shared/shared.module';

import {PAGES_ROUTER} from './pages.routes';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

import { ChartsModule } from 'ng2-charts';
import { GraficaDonaComponent } from '../components/grafica-dona/grafica-dona.component';

@NgModule({

    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graph1Component,
        PagesComponent,
        IncrementadorComponent,
        GraficaDonaComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTER,
        FormsModule,
        ChartsModule
    ],

    //Se hace exports sis e vana usar en otros lados
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graph1Component,
    ]

})

export class PagesModule { }
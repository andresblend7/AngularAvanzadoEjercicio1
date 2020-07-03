import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
 
  menu:any = [
    {
      titulo:'Principal',
      icono: 'mdi mdi-gauge',
      submenu:[
        {titulo:'DashBoard', url:'/dashboard'},
        {titulo:'ProgresBarr', url:'/progress'},
        {titulo:'Gráfica 1', url:'/graph1'},
        {titulo:'Promesas', url:'/promesas'},
        {titulo:'rxjs', url:'/rxjs'},
      ]
    }
  ];

  constructor() { }
}

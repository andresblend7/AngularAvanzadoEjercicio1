import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes:Ajustes = {
    temaUrl : 'assets/css/colors/default.css',
    tema:'default'
  };

  constructor(@Inject(DOCUMENT) private _document) { 
    this.cargarAjustes();
  }

  guardarAjustes(){
    localStorage.setItem("ajustes-theme", JSON.stringify(this.ajustes));    
  }

  cargarAjustes(){
    if(localStorage.getItem("ajustes-theme")){
      this.ajustes = JSON.parse(localStorage.getItem("ajustes-theme"));
      this.aplicarTema(this.ajustes.tema);
    }
  }

  aplicarTema(tema:string){
    let urlStyle=`assets/css/colors/${tema}.css`

    this._document.getElementById("theme").setAttribute('href', urlStyle );

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = urlStyle;
    this.guardarAjustes();
  }

}

interface Ajustes {
  temaUrl:string;
  tema:string;
}

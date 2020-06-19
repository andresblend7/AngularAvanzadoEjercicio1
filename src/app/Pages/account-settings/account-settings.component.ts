import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from 'src/app/services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document, public _ajustes: SettingsService) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cabiarColor(tema: string, link: any) {
    console.log(link);
    this.aplicarCheck(link);
    this._ajustes.aplicarTema(tema);

  }

  aplicarCheck(link: any) {
    let selectoresTheme: any = document.getElementsByClassName("selector");

    for (let ref of selectoresTheme) {
      ref.classList.remove('working');
    }

    link.classList.add("working");
  }

  colocarCheck() {
    let selectoresTheme: any = document.getElementsByClassName("selector");
    let temaActual = this._ajustes.ajustes.tema;

    for (let ref of selectoresTheme) {
      if (ref.getAttribute("data-theme") == temaActual) {
        ref.classList.add("working");
        return false;
      }
    }

  }

}

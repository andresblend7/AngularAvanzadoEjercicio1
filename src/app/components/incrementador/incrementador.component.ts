import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  //Referencia a un elemento html esecpífico.
  @ViewChild('txtpogreso', null) txtProgress : ElementRef;


  //un @input se puede renombrar
  @Input('valorInicial') porcentajeBarra: number = 50;
  @Input() label: String = 'NoSpecific';

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    console.log("label :", this.label);
  }

  ngOnInit() {
    console.log("label :", this.label);

  }

  CambiarProgreso(valor) {
    console.log(valor);

    if (this.porcentajeBarra >= 100 && (valor > 0))
      return false;

    if (this.porcentajeBarra <= 0 && (valor < 0))
      return false;

    this.porcentajeBarra += valor;
    this.cambioValor.emit(this.porcentajeBarra);
  }

  cambioFromInput(valor: number) {


    console.log("cambioFromInput", valor);

    //Esto solo funciona en chrome:
    console.log("cambioFromInput evento ", event);

    console.log("Elemento con ref", this.txtProgress);

    if (valor >= 100)
      this.porcentajeBarra = 100;
    else if (valor <= 0)
      this.porcentajeBarra = 0;
    else
      this.porcentajeBarra = valor;

    this.txtProgress.nativeElement.value = Number(this.porcentajeBarra);

    this.cambioValor.emit(this.porcentajeBarra);

    this.txtProgress.nativeElement.focus();

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  message:string="Ejecutando promisse";

  constructor() {

   
    this.contarHastaTres().then(
      (res) => {
        console.log("Temrinó promesa", res);
         this.message= "Terminó promesa=> "+ res;
      }
    ).catch(
      (err) => {
         console.log("Error en la promesa", err);
         this.message= "Error en la promesa"+ err;
      }
      
    )


  }

  ngOnInit() {


  }

  //promesaFuncion(){
  contarHastaTres():Promise<boolean> {

    return new Promise((resolve, reject) => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador++;
        console.log("contador ++ ", contador);

        if (contador === 3) {
          resolve(true);
          //Lanzar excepcipción
          //reject('Erroh mi amigo!');
          clearInterval(intervalo)
        }

      }, 1000);
    });
  }

}

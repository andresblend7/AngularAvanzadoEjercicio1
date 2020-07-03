import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  responses: Array<String> = [];
  subCripcionObservador : Subscription;

  constructor() {


    this.subCripcionObservador = this.regresarObservable()
    //Pipe transforma información
    .pipe(
      //Retray vuelve a intentar un observador (count: ) /operators
      retry(2)
    ).subscribe(
      valorNotificado => {
        console.log("Subscripción: ", valorNotificado);
        this.responses.push("Subscripción: " + valorNotificado);
      },
      error => {
        console.error("Error Subs", error)
        this.responses.push("Error Subs=> " + error);
      },
      () => {
        console.log("TERMINÓ EL OBSERVABLE")
        this.responses.push("TERMINÓ EL OBSERVABLE");
      });
  }
  ngOnDestroy(): void {
    this.subCripcionObservador.unsubscribe();
  }

  ngOnInit() {
  }

  regresarObservable(): Observable<any> {



    //Un observador se seguirá ejecutando aunque se salga de la página: subscribe(NEXT, ERROR, FINALLY)
    return new Observable<any>(observer => {

      let contador = 0;

      let intervalo = setInterval(() => {



        //Notificaicón del observador
        contador++;

        let respuesta = {
          valor: contador
        }


        observer.next(respuesta);


        if (contador === 3) {
          //clearInterval(intervalo);
          //Finalizar el observador 
         // observer.complete();
        } else if (contador >= 4) {
          clearInterval(intervalo);
          observer.error("Paila ma broh!");
        }


      }, 1000);
    }).pipe(
      //Map modifica la información como queremos que la retorne
      map(respuesta => respuesta.valor),
      filter((resp, idx)=>{
        return true;
        return (resp%2!=0);
      })
    );


  }

}

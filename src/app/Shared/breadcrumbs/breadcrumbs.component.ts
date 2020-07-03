import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  tituloRuta: string = '';

  constructor(private router: Router, private title:Title, private meta:Meta) {

    this.getDataDeRutas().subscribe(evento => {
      console.log("Evento rutas", evento);
      this.tituloRuta = evento.pageName;
      this.title.setTitle(this.tituloRuta);
      
      const metaTag: MetaDefinition = {
         name : "description"   ,
         content : this.tituloRuta
      }

      this.meta.addTag(metaTag);
    });

  }

  ngOnInit() {
  }

  //Obtiene la data de las rutas 
  getDataDeRutas(): Observable<any> {
    return this.router.events.pipe(
      filter(evento => evento instanceof ActivationEnd),
      filter((evento: ActivationEnd) => evento.snapshot.firstChild == null),
      map((evento: ActivationEnd) => evento.snapshot.data)
    );
  }

}

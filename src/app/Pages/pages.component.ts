import { Component, OnInit } from '@angular/core';

//Llamar una función de otro javascript
declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //Llamar una función de otro javascript
    init_plugins();
  }

}

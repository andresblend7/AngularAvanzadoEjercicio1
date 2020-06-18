import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progress1: number = 90;
  progress2: number = 95;

  constructor() { }

  ngOnInit() {
  }

  updateProgres(event) { 
    this.progress1= event;
    console.log("evento recibido=>", event);

  }

}

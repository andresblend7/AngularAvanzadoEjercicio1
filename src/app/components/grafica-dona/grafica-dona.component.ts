import { Component, OnInit, Input, AfterContentInit } from '@angular/core';

import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: []
})
export class GraficaDonaComponent implements OnInit, AfterContentInit {
   // Doughnut
   @Input() objGrafico : any;
  
   
   labelsChart: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
   dataChart: MultiDataSet = [
     [350, 450, 100],
   ];
   public chartType: ChartType = 'doughnut';

  constructor() { }




  ngOnInit() {

    if(this.objGrafico!= undefined){
      console.log(this.objGrafico.labels);
      this.labelsChart = this.objGrafico.labels;
      this.dataChart = this.objGrafico.data;
    }

    
    
    
  }


}

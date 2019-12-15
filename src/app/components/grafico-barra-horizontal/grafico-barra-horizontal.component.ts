import { Component, OnDestroy, Input } from '@angular/core';
import { JuegoGrafica } from '../../interfaces/interfaces';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy {

  @Input() juegos: JuegoGrafica[] = [];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';


  constructor() {

  }

  onSelect(event) {
    console.log(event);
  }

  ngOnDestroy(): void {
    // clearInterval(this.intervalo);
  }

}

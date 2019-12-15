import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Game, JuegoGrafica } from '../../interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  juegos: JuegoGrafica[] = [];

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.db.collection('goty').valueChanges().pipe(
        map((resp: Game[]) => {
          // estoy diciendo que del objeto Game solo necesito name y votos y que eso lo voy
          // a transformar en un objeto con las propiedades name y value: votos.
          // Esto es posible gracias a la DESTRUCTURACION de arreglos ({}) de js
          // para pasar de  un objeto Game a otro objeto
          // name, value que es como lo necesita la grafica para pintar los datos
          // todo esto gracias al perador pipe y al map de los rxjs

          // modo 'menos claro'
          // return resp.map(({name, votos}) => ({name, value: votos}));

          // modo 'mas claro'
          return resp.map( juego => {
            return {
              name: juego.name,
              value: juego.votos
            };
          });
        })).subscribe(juegos => {
      // console.log(juegos);
      this.juegos = juegos;
    });
  }

}

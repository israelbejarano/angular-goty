import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game, VotoResp } from '../../interfaces/interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  juegos: Game[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getNominados().subscribe(resp => {
      this.juegos = resp;
      // console.log(this.juegos);
    });
  }

  votarJuego(juego: Game) {
    // console.log(juego);
    this.gameService.votarJuego(juego.id).subscribe((resp: VotoResp) => {
      // console.log(resp);
      if (resp.ok) {
        Swal.fire('Gracias', resp.mensaje, 'success');
      } else {
        Swal.fire('Oops', resp.mensaje, 'error');
      }
    });
  }

}

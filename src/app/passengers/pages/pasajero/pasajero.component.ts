import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PasajerosService } from '../../services/pasajeros.service';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.component.html',
  styleUrls: ['./pasajero.component.css']
})
export class PasajeroComponent implements OnInit {

  constructor( private route: ActivatedRoute,
              public pasajeroService:PasajerosService ) { }

  ngOnInit() {

    this.route.params.subscribe(parametros =>{

      // console.log(parametros['id']);

      this.pasajeroService.getPasajero(parametros['id'])
              .subscribe(pasajero => {
                console.log(pasajero);
              });

    });

  }

}

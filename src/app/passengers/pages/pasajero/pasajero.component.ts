import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PasajerosService } from '../../services/pasajeros.service';
//interfaces
import { PasajeroIdInterface } from '../../interfaces/pasajero-id';


@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.component.html',
  styleUrls: ['./pasajero.component.css']
})
export class PasajeroComponent implements OnInit {

  pasajero: PasajeroIdInterface;

  constructor( private route: ActivatedRoute,
              public pasajeroService:PasajerosService ) { }

  ngOnInit() {

    this.route.params.subscribe(parametros =>{

      this.pasajeroService.getPasajero(parametros['id'])
              .subscribe((dataPasajero: PasajeroIdInterface) => {
                // console.log(dataPasajero);
                this.pasajero= dataPasajero
                console.log(this.pasajero);
              });

    });

  }

}

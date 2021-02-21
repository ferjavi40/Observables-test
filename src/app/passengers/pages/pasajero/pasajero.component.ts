import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//services
import { PasajerosService } from '../../services/pasajeros.service';
import { SharingDataService } from '../../services/sharing-data.service';


//interfaces
import { PasajeroIdInterface } from '../../interfaces/pasajero-id';



@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.component.html',
  styleUrls: ['./pasajero.component.css']
})
export class PasajeroComponent implements OnInit {

  pasajero: PasajeroIdInterface;
  mostrar: boolean;
  
  mostrarBoton(){
    this.mostrar = !this.mostrar;
  }




  constructor( private route: ActivatedRoute,
              public pasajeroService:PasajerosService,
              private sharingService: SharingDataService ) { }

  ngOnInit() {

    this.route.params.subscribe(parametros =>{

      this.pasajeroService.getPasajero(parametros['id'])
              .subscribe((dataPasajero: PasajeroIdInterface) => {
                this.pasajero= dataPasajero
                this.sharingService.pasajero$.emit(this.pasajero);
                console.log(this.pasajero);
              });

    });



  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PasajerosService } from '../../services/pasajeros.service';
import { HttpClient } from '@angular/common/http';
//interfaces
import { PasajeroIdInterface } from '../../interfaces/pasajero-id';
//Loading
import { NgxUiLoaderService } from 'ngx-ui-loader';


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
              private http: HttpClient,
              private ngxLoader: NgxUiLoaderService ) { }

  ngOnInit() {

    this.route.params.subscribe(parametros =>{

      this.pasajeroService.getPasajero(parametros['id'])
              .subscribe((dataPasajero: PasajeroIdInterface) => {
                // console.log(dataPasajero);
                this.pasajero= dataPasajero
                console.log(this.pasajero);
              });

    });

    this.ngxLoader.start();
    this.http.get(`https://api.npmjs.org/downloads/range/last-year/ngx-ui-loader`).subscribe((res: any) => {
      // console.log(res);
      this.ngxLoader.stop();
    });

  }

}

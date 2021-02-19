import { Component } from '@angular/core';

//services
import { PasajerosService } from './passengers/services/pasajeros.service';
import { InfoPaginaService } from './passengers/services/info-pagina.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public datosService:InfoPaginaService , 
              public pasajerosComponent:PasajerosService ){}
  
}

import { Component } from '@angular/core';
import { InfoPaginaService } from '../../passengers/services/info-pagina.service';
import { DatosFjInterface } from '../../passengers/interfaces/interfaces';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  {

  anio: number = new Date().getFullYear();

  

  constructor( public servicio: InfoPaginaService) { 
  
  }

  



}

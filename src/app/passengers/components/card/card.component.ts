import { Component,  OnInit } from '@angular/core';
//services
import { SharingDataService } from '../../services/sharing-data.service';
//interfaces
import { PasajeroIdInterface} from '../../interfaces/pasajero-id';





@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  mostrar: boolean;
  
  mostrarBoton(){
    this.mostrar = !this.mostrar;
  }

  pasajero: PasajeroIdInterface;

  constructor( private sharedData:SharingDataService ) { }

  ngOnInit() {

    this.sharedData.pasajero$.subscribe( data=>{
      this.pasajero = data;
      console.log(data);
    });

  }

}

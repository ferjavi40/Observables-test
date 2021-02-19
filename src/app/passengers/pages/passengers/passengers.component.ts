import { Component } from '@angular/core';
import { PasajerosService } from '../../services/pasajeros.service';

import { PassengersInterface } from '../../interfaces/passengers';


@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.css']
})
export class PassengersComponent {


  constructor(public infoService: PasajerosService) {

  }


}

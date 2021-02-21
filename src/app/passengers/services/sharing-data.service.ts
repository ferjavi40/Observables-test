import { Injectable,EventEmitter  } from '@angular/core';
//
import { PasajeroIdInterface } from '../interfaces/pasajero-id';



@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  pasajero$= new EventEmitter<PasajeroIdInterface>();

  constructor() { }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//interface
import { DatosFjInterface } from '../interfaces/interfaces';
import { PassengersInterface } from '../interfaces/passengers';




@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: DatosFjInterface = {};
  cargada = false;

  passengers: PassengersInterface [] = [];


  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarPassengers();
  }

  private cargarInfo() {
    //data from local 
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: DatosFjInterface) => {
        this.cargada = true;
        this.info = resp;
      });
  }

  private cargarPassengers() {
    //data from Firebase
    this.http.get('https://test-observables-14aba-default-rtdb.europe-west1.firebasedatabase.app/passengers.json')
        .subscribe((resp: PassengersInterface [] )=>{
          this.passengers = resp;
          console.log(resp);
        });
  }



}

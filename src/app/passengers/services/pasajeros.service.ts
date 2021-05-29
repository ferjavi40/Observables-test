import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PassengersInterface } from '../interfaces/passengers';


@Injectable({
  providedIn: 'root'
})
export class PasajerosService {

  loading = true;

  pasajeros: PassengersInterface[] = [];

  private apiUrl: string = 'https://test-observables-14aba-default-rtdb.europe-west1.firebasedatabase.app/passengers.json'

  constructor(private http: HttpClient) {
    this.cargarPasajeros();
  }

  private cargarPasajeros() {
    this.http.get(this.apiUrl)
      .subscribe((resp: PassengersInterface[]) => {
        this.pasajeros = resp;
        this.loading = false;
      });
  }

  getPasajero(id: string) {

    return this.http.get(`https://test-observables-14aba-default-rtdb.europe-west1.firebasedatabase.app/pasajeroId/${id}.json`);
  }


}

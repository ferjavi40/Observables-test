import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//interface
import { DatosFjInterface } from '../interfaces/interfaces';





@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: DatosFjInterface = {};
  cargada = false;



  constructor(private http: HttpClient) {
    this.cargarInfo();
    
    
  }

  private cargarInfo() {
    //data from local 
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: DatosFjInterface) => {
        this.cargada = true;
        this.info = resp;
      });
  }




}

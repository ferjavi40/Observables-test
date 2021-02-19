import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.component.html',
  styleUrls: ['./pasajero.component.css']
})
export class PasajeroComponent implements OnInit {

  constructor( private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(parametros =>{
      console.log(parametros['id']);
    });

  }

}

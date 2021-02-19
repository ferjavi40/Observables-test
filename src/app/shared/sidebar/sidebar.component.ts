import { Component, OnInit } from '@angular/core';
import { PasajerosService } from '../../passengers/services/pasajeros.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor( public pasajeroService: PasajerosService) { }

  ngOnInit(): void {
  }

}

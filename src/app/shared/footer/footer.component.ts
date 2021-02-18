import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../passengers/services/info-pagina.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio: number = new Date().getFullYear();

  constructor( private _infoPaginaService: InfoPaginaService) { }

  ngOnInit(): void {
  }

}

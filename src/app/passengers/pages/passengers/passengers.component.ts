import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PasajerosService } from '../../services/pasajeros.service';

//Loading
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.css']
})
export class PassengersComponent implements OnInit {


  constructor(public infoService: PasajerosService,
    private http: HttpClient,
    private ngxLoader: NgxUiLoaderService) { }

    


  ngOnInit() {

    this.ngxLoader.start();
    this.http.get(`https://api.npmjs.org/downloads/range/last-year/ngx-ui-loader`).subscribe((res: any) => {
      // console.log(res);
      this.ngxLoader.stop();
    });
  }

}

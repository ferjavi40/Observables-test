import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


//services
import { InfoPaginaService } from './passengers/services/info-pagina.service';


//modules
import { PassengersModule } from './passengers/passengers.module';
import { SharedModule } from './shared/shared.module';

//Rutas
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PassengersModule,
    SharedModule,
    HttpClientModule
    
  ],
  providers: [
    InfoPaginaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

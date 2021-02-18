import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';



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
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

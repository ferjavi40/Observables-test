import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PassengersModule } from './passengers/passengers.module';
import { SharedModule } from './shared/shared.module';

//Rutas
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';






@NgModule({
  declarations: [
    AppComponent,
    

  ],
  imports: [
    BrowserModule,
    PassengersModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

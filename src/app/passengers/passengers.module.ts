import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { PassengersComponent } from './pages/passengers/passengers.component';
import { PasajeroComponent } from './pages/pasajero/pasajero.component';



@NgModule({
  declarations: [
    CardComponent,
    HomeComponent,
    PassengersComponent,
    PasajeroComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PassengersModule { }

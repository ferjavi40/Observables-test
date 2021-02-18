import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    CardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PassengersModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//components
import { HomeComponent } from './passengers/pages/home/home.component';
import { PassengersComponent } from './passengers/pages/passengers/passengers.component';
import { PasajeroComponent } from './passengers/pages/pasajero/pasajero.component';




const routes: Routes = [
  {path:'', component: HomeComponent, pathMatch: 'full'},
  {path:'passengers', component: PassengersComponent},
  {path: 'passenger/:id', component:PasajeroComponent},
  {path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
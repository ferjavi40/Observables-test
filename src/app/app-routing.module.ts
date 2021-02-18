import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//components
import { HomeComponent } from './passengers/pages/home/home.component';
import { PassengersComponent } from './passengers/pages/passengers/passengers.component';
import { PasajeroComponent } from './passengers/pages/pasajero/pasajero.component';




const routes: Routes = [
  {path:'', component: HomeComponent, pathMatch: 'full' },
  {path:'pasajeros', component: PassengersComponent},
  {path: 'passenger', component:PasajeroComponent},
  {path: '**',  redirectTo:''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
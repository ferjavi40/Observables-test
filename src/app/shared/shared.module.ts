import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//routes
import { AppRoutingModule } from '../app-routing.module';



import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ]
})
export class SharedModule { }

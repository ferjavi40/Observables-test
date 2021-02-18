import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PassengersModule } from './passengers/passengers.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    PassengersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

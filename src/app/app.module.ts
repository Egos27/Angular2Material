import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// 1- incluir el modulo para 
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
//2- esto debe estar y e auto genera
import { LoginComponent } from './login/login.component';
//3 creo el array para el ruteo

const rutasDenavegacion:Routes =[{path:'login',component:LoginComponent}];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // 4-importamos el moduflo con las rutas
    RouterModule.forRoot(rutasDenavegacion)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//1 Agrego la libreria
import {MaterialModule} from '@angular/material';
//3 Agrego la libreria
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';

const rutasDenavegacion:Routes =[{path:'login',component:LoginComponent},
{path: '',redirectTo :'/login' ,pathMatch:'full'},
{path:'**',component: PaginaNoEncontradaComponent}];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaginaNoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,    
    RouterModule.forRoot(rutasDenavegacion),
    //2 Importo la clase
    MaterialModule.forRoot(),
    //4 importo la clase
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

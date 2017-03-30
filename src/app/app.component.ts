import { Component } from '@angular/core';
import {SaludadorService} from './saludador.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[SaludadorService]
})
export class AppComponent {
  title = 'app works!';

 saludo:string;

   constructor (private miservicio:SaludadorService)
   {
      this.saludo = miservicio.saludar("octavio");
   }
}

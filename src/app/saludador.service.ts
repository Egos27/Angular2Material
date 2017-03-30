import { Injectable } from '@angular/core';

@Injectable()
export class SaludadorService {

  constructor() { }
  saludar(nombre:string)
  {
    let saludo = "buen dia " + nombre;
    return saludo;
  }

}

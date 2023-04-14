import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  //conecção com o servidor = http

  constructor() { }

  getCursos(){
    return['Java', 'Ext JS',  'Angular'];
  }
}

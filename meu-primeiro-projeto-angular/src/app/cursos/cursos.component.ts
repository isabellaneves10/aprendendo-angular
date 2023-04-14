import { Component } from '@angular/core';

//importando a serve
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  //criando uma string tipada
  nomePortal: string;

  //criando um array
  cursos: string[];

  //construtor como no java 
              //criando uma instancia manualmente de CursoService
                //var servico = new CursosService();
                // instanciando a variavel cursosServices | injeção de dependencia
  constructor(private cursosServices : CursosService) {

    this.nomePortal = 'http://loiane.training';
    this.cursos = this.cursosServices.getCursos();

  }

}

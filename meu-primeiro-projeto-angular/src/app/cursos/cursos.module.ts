import { CursosService } from './cursos.service';
//módulo de funcionalidade
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//importando o cursos.component
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],
  imports: [
    CommonModule,
  ],
  //diz pro angular o que nós queremos expor pra outros módulos
  exports: [
    CursosComponent
  ],
  //serviços fornecedores
  providers: [CursosService]
})
export class CursosModule { }

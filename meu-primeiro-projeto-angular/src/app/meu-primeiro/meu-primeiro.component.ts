//Importar a anotação Component do angular core
import {Component} from '@angular/core';

@Component({
//seleciona o 'pacote'
    selector: 'meu-primeiro-component',
//criando uma tag no template
    template: `
    <p> Meu primeiro component com angular 2 </p>
    `
})
//A classe deve ser exportada para
//poder ser acessada em outros componentes
export class MeuPrimeiroComponent { }
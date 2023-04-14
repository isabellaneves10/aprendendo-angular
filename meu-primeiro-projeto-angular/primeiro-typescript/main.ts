var minhaVar = 'mihna variavel';

function minhaFunc(x, y) {
    return x + y;
}
////////////////////////////////////////

var numeros = [1, 2, 3]
//esses duas funções são a mesma coisa 
numeros.map(function (valor) {
    return valor * 2;
})

numeros.map(valor => valor * 2);

//////////////////////////////////////////
class Matematica {
    soma(x, y) {
        return x + y;
    }
}
/////////////////////////////////////////

//tipando uma variavél pra aceitar qualuqer valor
var n1 : any = 'oi';
n1 = 4;
//tipango string
var n2 : string = 'oi'
n1 = 4;

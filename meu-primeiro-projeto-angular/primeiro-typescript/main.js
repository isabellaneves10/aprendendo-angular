var minhaVar = 'mihna variavel';
function minhaFunc(x, y) {
    return x + y;
}
var num = 2;
var numeros = [1, 2, 3];
//esses duas funções são a mesma coisa 
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; });
var Maatematica = /** @class */ (function () {
    function Maatematica() {
    }
    Maatematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Maatematica;
}());

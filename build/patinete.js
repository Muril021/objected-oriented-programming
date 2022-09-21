var Patinete = /** @class */ (function () {
    function Patinete(tipo, valor) {
        this.tipo = tipo;
        this.valor = valor;
    }
    Patinete.prototype.andar = function () {
        console.log("O patinete est\u00E1 andando.");
    };
    return Patinete;
}());
var patinete = new Patinete('elétrico', 50);
console.log("O patinete \u00E9 do tipo ".concat(patinete.tipo));
console.log("O valor do patinete \u00E9 de: R$".concat(patinete.valor));
console.log(patinete.andar());

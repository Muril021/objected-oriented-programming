var contaBancaria = /** @class */ (function () {
    function contaBancaria(numConta, tipo) {
        this.numConta = numConta;
        this.tipo = tipo;
    }
    contaBancaria.prototype.mudar = function () {
        console.log("A conta foi mudada para conta sal\u00E1rio.");
    };
    return contaBancaria;
}());
var conta = new contaBancaria(12345, 'corrente');
console.log("O n\u00FAmero da conta \u00E9 ".concat(conta.numConta));
console.log("O tipo da conta \u00E9 ".concat(conta.tipo, "."));
console.log(conta.mudar());

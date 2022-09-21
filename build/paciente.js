var Paciente = /** @class */ (function () {
    function Paciente(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
    Paciente.prototype.medic = function () {
        console.log("O paciente ".concat(paciente.nome, " est\u00E1 internado."));
    };
    return Paciente;
}());
var paciente = new Paciente('Carlos Almeida', '123.456.789-00');
console.log("O nome do paciente \u00E9 ".concat(paciente.nome));
console.log("O CPF do paciente \u00E9 ".concat(paciente.cpf));
console.log(paciente.medic());

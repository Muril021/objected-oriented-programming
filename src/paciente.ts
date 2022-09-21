class Paciente{
    public nome: string;
    public cpf: string;

    constructor(nome: string, cpf: string){
        this.nome = nome;
        this.cpf = cpf;
    }

    public medic(){
        console.log(`O paciente ${paciente.nome} está internado.`);
    }
}
const paciente = new Paciente('Carlos Almeida', '123.456.789-00');

console.log(`O nome do paciente é ${paciente.nome}`);
console.log(`O CPF do paciente é ${paciente.cpf}`);
console.log(paciente.medic());
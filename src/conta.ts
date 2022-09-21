class contaBancaria{
    public numConta: number;
    public tipo: string;

    constructor(numConta: number, tipo: string){
        this.numConta = numConta;
        this.tipo = tipo;
    }

    public mudar(){
        console.log(`A conta foi mudada para conta salário.`); 
    }
}
const conta = new contaBancaria(12345, 'corrente');

console.log(`O número da conta é ${conta.numConta}`);
console.log(`O tipo da conta é ${conta.tipo}.`);
console.log(conta.mudar());
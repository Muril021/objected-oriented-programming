class Patinete{
    public tipo: string;
    public valor: number;

    constructor(tipo: string, valor: number){
        this.tipo = tipo;
        this.valor = valor;
    }

    public andar():void{
        console.log(`O patinete está andando.`);
    }
}
const patinete = new Patinete('elétrico', 50);

console.log(`O patinete é do tipo ${patinete.tipo}`);
console.log(`O valor do patinete é de: R$${patinete.valor}`);
console.log(patinete.andar());


const lista = [
    {
        name: 'sabao em po',
        preco: 30,
    },
    {
        name: 'cereal',
        preco: 12,   
    },
    {
        name: 'arroz',
        preco: 30,
    },
];

const saldoDisponivel = 100;

function calcularSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current){
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calcularSaldo(saldoDisponivel,lista));
function passarParametros() {
    let n1 = Number(prompt('Insira o primeiro valor:'));
    let n2 = Number(prompt('Insira o segundo valor:'));
    let resultado; 
    if (!n1 || !n2) {
        alert('erro - parâmetros inválidos');
        passarParametros();
    }else{
    resultado = verificarNumeros(n1,n2,resultado);
    document.getElementById('resultado').innerHTML = resultado;
    }
}

function verificarNumeros(num1,num2,resultado) {
    let numerosIguais;
    let somaDosNumeroMaiorQue10;
    let somaDosNumeroMenorQue20;
    let soma = num1 + num2;
    let SuaSoma =  `Sua soma e ${soma}`; 

    let VerificarSenumerosIguais = num1 === num2;
    let VerificarSesomaDosNumeroMaiorQue10 = num1 + num2 > 10;
    let VerificarSesomaDosNumeroMenorQue20 = num1 + num2 < 20;

    (VerificarSenumerosIguais)? numerosIguais = `Os números ${num1} e ${num2} são iguais.`
    : numerosIguais = `Os números ${num1} e ${num2} não são iguais.`;

    (VerificarSesomaDosNumeroMaiorQue10)? somaDosNumeroMaiorQue10 = ", que e maior que 10,"
    : somaDosNumeroMaiorQue10 = ", que não e maior que 10,";

    (VerificarSesomaDosNumeroMenorQue20)? somaDosNumeroMenorQue20 = " e menor que 20."
    : somaDosNumeroMenorQue20 = " e maior que 20.";

    resultado = numerosIguais + SuaSoma + somaDosNumeroMaiorQue10 + somaDosNumeroMenorQue20;
    return resultado;
}

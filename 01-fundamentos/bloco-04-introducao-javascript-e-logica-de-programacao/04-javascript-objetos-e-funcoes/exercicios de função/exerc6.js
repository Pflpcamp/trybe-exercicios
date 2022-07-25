/*Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N*/

function somaDosNumeros(inteiro){
    let soma = 0;
    for(let i = 0; i <= inteiro;i++){
        soma = soma + i;
    }
    return soma;
}

console.log(somaDosNumeros(5));
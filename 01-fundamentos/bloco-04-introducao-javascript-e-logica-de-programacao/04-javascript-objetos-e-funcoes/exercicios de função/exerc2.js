/*Crie uma função que receba um array de inteiros e retorne o índice do maior valor.*/

function maiorValor(array){
    let indexMaior = 0;
    let maior = 0;
    for(let i = 0; i < array.length;i++){
        if(array[i] > maior){
            indexMaior = i;
            maior = array[i];
    }
  }
  return console.log(indexMaior)
}

maiorValor([2, 3, 6, 7, 10, 16]);
/*Crie uma função que receba um array de inteiros e retorne o índice do menor valor*/

function menorValor(array){
    let indexMenor = 0;
    let menor = array[0];
    for(let i = 0; i < array.length;i++){
        if(array[i] < menor){
            indexMenor = i;
            menor = array[i];
    }
  }
  return console.log(indexMenor)
}

menorValor([2, 4, 6, 7, 10, -10, -3]);
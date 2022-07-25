/*Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete*/

function maisRepetido(array){
    let inteiro = 0;
    let contador = 0;
    let vezesRepetidas = 0;
    for(let i = 0;i < array.length;i++){
        vezesRepetidas = 0;
        for(let j = 0; j < array.length;j++){
            if(array[j] == array[i]){
                vezesRepetidas++
            }
        }
        if(vezesRepetidas > contador){
            inteiro = array[i];
            contador = vezesRepetidas;
        }
    }
    return console.log(inteiro);
    }

    maisRepetido([2, 3, 2, 5, 8, 2, 3]);


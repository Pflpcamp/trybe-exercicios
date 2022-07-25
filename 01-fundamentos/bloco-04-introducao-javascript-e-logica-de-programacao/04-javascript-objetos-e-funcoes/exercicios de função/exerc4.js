/*Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.*/

function maiorChar(array){
    let maior = '';
    for(let i = 0;i < array.length; i++){
        if(array[i].length > maior.length){
            maior = array[i];
        }
    }
    return console.log('O maior nome é: ',maior);
}

maiorChar(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);
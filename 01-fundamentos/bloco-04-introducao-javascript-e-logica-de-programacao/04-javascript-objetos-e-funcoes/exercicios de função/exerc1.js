/*Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.*/

function verificarPalindrome(palavra) {
    let palavraRevertida = '';
    for(i = palavra.length - 1; i >= 0; i--){
    palavraRevertida = palavraRevertida + palavra[i];
    }
    if(palavra == palavraRevertida){
        return console.log(true);
    }else{
        return console.log(false);
    }
    
}

verificarPalindrome('arara')





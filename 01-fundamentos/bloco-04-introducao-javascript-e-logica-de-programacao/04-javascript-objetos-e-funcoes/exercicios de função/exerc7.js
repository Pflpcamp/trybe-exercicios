/*Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.*/

function verificarString(string,stringEnd){
    let newString = '';
    for(let i = string.length - stringEnd.length; i < string.length;i++){
        newString = newString + string[i];
    }

    if(newString === stringEnd){
        return true;
    }else{
        return false;
    }
}

console.log(verificarString('joaofernando', 'fernan'));
console.log(verificarString('trybe','be'))
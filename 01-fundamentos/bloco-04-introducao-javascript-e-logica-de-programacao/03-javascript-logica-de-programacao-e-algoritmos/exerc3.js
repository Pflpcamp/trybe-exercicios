/*Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.*/

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array[0];
let menor = array[0];
for(i = 0;i < array.length;i++){
    if(array[i].length > maior.length){
        maior = array[i];
        }
    if(array[i].length < menor.length){
        menor = array[i];
    }
}
console.log('A maior string é:',maior);
console.log('A menor string é:',menor);

/*Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.*/
let primo = 0;
let divisores = 0;
let ultimoPrimo
for(i = 2;i <= 50;i++){
    for(j = 1; j <= i;j++){
        if(i%j == 0){
            divisores++;  
        }
    }
    if(divisores <= 2){
        primo++;
        ultimoPrimo = i;
    }
    divisores = 0; 
}

console.log('Existem ' + primo + ' números primos entre esses dois números. O último número primo é', ultimoPrimo);



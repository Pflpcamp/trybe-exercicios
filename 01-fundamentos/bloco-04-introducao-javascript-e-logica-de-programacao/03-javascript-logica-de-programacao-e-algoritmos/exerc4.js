/*Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.*/
let primo = 0;
let divisores = 0;
for(i = 2;i <= 1000;i++){
    for(j = 1; j <= i;j++){
        if(i%j == 0){
            divisores++;  
        }
    }
    if(divisores <= 2){
        primo++;
    }
    divisores = 0; 
}

console.log(primo);



/**Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
 */

 let n = 6;
 let line = '';
 let symbol = '*';
 
 
 
 for(let i = 0;i < n;i++){
     for(let j = 0;j < i+1;j++){
         line = line + symbol;
     }
     console.log(line);
     line = ''
 }
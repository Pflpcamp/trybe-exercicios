/*Exercicio 1:----------------------------------------------------------------------------------------*/
const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = `Não devo ser utilizada fora do meu escopo (if)`
      ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
      console.log(ifScope);
    } else {
      let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
      console.log(elseScope);
    }
  }

  testingScope(true);

/*Exercicio 2:----------------------------------------------------------------------------------------*/


const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortOddsAndEvens = () => oddsAndEvens.sort(function(a,b){return a - b});
console.log(sortOddsAndEvens()); 

/*Exercicio 3:----------------------------------------------------------------------------------------*/

const fatorial = (num) => {
    let result = [];
    for (let i = 1; i <= num; i+= 1){
        result.push(i)
    }
    return result.reduce((a,b) => a*b , 1);
}
console.log(`Esse é o fatorial: ${fatorial(4)}`);



//const fatorialRecursiva = num => (num > 1) ? num * fatorialRecursiva(num - 1) : 1;
//console.log(fatorialRecursiva(4));

/*Exercicio 4:----------------------------------------------------------------------------------------*/

const maiorPalavra = string => {
   let array = string.split(' ');
   array.sort(function(a,b) {return b.length - a.length});
   return console.log(`A maior palavra é: '${array[0]}'`);
   
}

maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu')

/*Exercicio 5:----------------------------------------------------------------------------------------*/

const substituaX = (nome) => {
  const frase = 'Tryber x aqui!';
  let fraseSemX = frase.split('x');
  return `${fraseSemX[0]} ${nome} ${fraseSemX[1]}`;
}
console.log((substituaX('Bebeto')))

const minhasSkills = (string) => {
  const skills = ['css','javascript','html'];
  const newString = `${string} Minhas três principais habilidades são:
  -${skills[0]}
  -${skills[1]}
  -${skills[2]}`
  
  return newString;
}

console.log(minhasSkills(substituaX('Bebeto')));

/*--------------------------------------------------------------------------------------------------*/
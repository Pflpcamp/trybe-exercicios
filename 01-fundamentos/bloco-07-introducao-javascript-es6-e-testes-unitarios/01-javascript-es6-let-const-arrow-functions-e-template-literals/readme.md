## Exercicio 1: 
```
      function testingScope(escopo) {
        if (escopo === true) {
          var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
          ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
          console.log(ifScope);
        } else {
          var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
          console.log(elseScope);
        }
        console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
      }

      testingScope(true);
```
- 🚀 Altere o tipo das variáveis(var) para let ou const para que respeitem o escopo em que foram declaradas, e altere a função utilizando arrow function e template literals.
  - Modifique a estrutura da função para que ela seja uma arrow function;
  - Modifique as variáveis para que respeitem o escopo onde estão declaradas;
  - Modifique as concatenações para template literals.
  
## Exercicio 2: 
```
        const oddsAndEvens = [13, 3, 4, 10, 7, 2];

    const sortOddsAndEvens = () => {

    // Seu código aqui.

    };

    console.log(oddsAndEvens); // será necessário alterar essa linha 😉
```
- 🚀 Crie uma função que retorne um array em ordem crescente.
  - Crie uma função que faça com que o array oddsAndEvens fique em ordem crescente;
  - Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.
  
## Exercicio 3: 
- Crie a função factorial que recebe um número como parâmetro, utilizando arrow functions (Lembre-se de armazenar a função utilizando o tipo de variável correta).
  - Dentro da função crie uma variável result.
  - Crie a lógica para retornar o fatorial de N!.
  - Imprima no terminal "Esse é o fatorial resultado da função" (Lembre-se de utilizar template literals nesse momento).
  
## Exercicio 4:
- Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.
  - Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort().
  
## Exercicio 5:
- 🚀 Crie duas funções JavaScript com as seguintes especificações:
Não se esqueça de usar template literals
 - Função 1: Escreva uma função que substitua a letra 'x' em uma frase.
O nome da função deverá ser substituaX;

    - A função deverá receber um nome por parâmetro;
  
    - Declare dentro da função uma variável do tipo const, com o nome frase,     atribuindo o valor 'Tryber x aqui!';
  
    - A função deverá retornar uma nova frase onde o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.
  
    - Exemplo:
Parâmetro: 'Bebeto'
Retorno: 'Tryber Bebeto aqui!'
    - Spoiler: O método split() pode ser utilizado de diferentes maneiras, como separar as palavras de um texto.
  
 - Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.
     - O nome da função deverá ser minhasSkills;
     
     - A função deverá receber o retorno da Função 1 - substituaX por parâmetro;
     
     - Declare dentro da função uma variável com o nome skills, do tipo const;
     
      - A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.
     - Crie uma varável do tipo let e concatene o valor retornado da Função 1 - substituaX (utilize template literals), a frase 'Minhas três principais habilidades são:' e o valor da variável skills.
     
    - Exemplo de retorno:
Tryber Bebeto aqui!
Minhas três principais habilidades são:JavaScript HTML CSS

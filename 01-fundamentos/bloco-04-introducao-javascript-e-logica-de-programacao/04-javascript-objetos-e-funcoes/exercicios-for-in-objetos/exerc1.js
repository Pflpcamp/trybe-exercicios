/**Usando o objeto abaixo, faça os exercícios a seguir
 * Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console
*/
 

 let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrentet: 'Sim',
  };

  console.log('Bem vinda, ' + info.personagem);

  /*Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:*/
  console.log(info);

  /** Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console */

  for(let key in info){
    console.log(key);
  }

  /*Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto*/

  for(let key2 in info){
    console.log(info[key2]);
  }

 
/*Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.*/

let info = [
    {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
    },
    {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
    },
    ];
  

       console.log(info[0].personagem, ' e ' ,info[1].personagem);
       console.log(info[0].origem, ' e ' ,info[1].origem);
       console.log(info[0].nota, ' e ' ,info[1].nota);
       console.log('Ambos recorrentes');

    
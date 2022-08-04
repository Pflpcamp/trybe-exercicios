## Exercicios





### Exercicio 1: Vamos praticar um pouco, criando uma tela de login? 

1. Adicione os campos de entrada para email e senha.

2. Adicione um checkbox com o texto Lembre-me.

3. Adicione um botão com o texto Entrar.

4. Adicione os placeholder Digite seu email e Digite sua senha para os campos de email e senha.

5. Adicione o atributo required para os campos de email e senha.

6. Adicione o atributo autocomplete="off" para o campo de email.

7. Adicione o atributo autofocus para o campo de email.


### Exercicio 2: Para Fixar

Copie os três elementos abaixo (a, input type="text", checkbox) em sua página.
```
<a href="www.betrybe.com" target="_blank" id="href">TRYBE</a>
<input type="text" id="input-text"/>
<input type="text" id="input-text"/>
```


2. Adicione um evento click no elemento checkbox que possui o id input-checkbox. Na função do evento, implemente o método .preventDefault() para previnir o comportamento padrão do elemento. Ou seja, ao clicar na caixinha, nada deve acontecer.

3. Adicione um evento keypress no elemento input type="text" que possui o id input-text. Na função do evento, implemente o método .preventDefault() de forma que somente o caractere a (letra 'a' minúscula) possa ser digitado na caixinha. (dica: para capturar a tecla digitada, utilize o event.key)



### Exercicio 3: O exercício hoje será desenvolver uma página web com o formulário da TrybeTrip. A estruturação de sua página deverá ficar semelhante com a imagem abaixo.
![alt text](https://assets.app.betrybe.com/fundamentals/html-forms/images/Excalidraw-forms-94cb593582e99fd08f284274fd8b50ab.png)

1. Crie o costume de adicionar ID's a elementos únicos e classes a elementos com comportamentos similares, pois isso facilitará muito sua vida como pessoa desenvolvedora;  
  - O formulário deverá permitir que a pessoa usuária insira os seguintes campos: 
  - Nome Completo: Limitado entre 10 e 40 caracteres.

  - E-mail: Limitado entre 10 e 50 caracteres.

2. Destino Preferido:

  - 4 opções: Cidade, Campo, Praia, Montanhas.

3. Por que você deveria ser a pessoa desenvolvedora a ganhar o concurso TrybeTrip? Limite de 500 caracteres.

4. Qual a melhor data para realizar sua viagem?

5. Gostaria de receber outras incríveis oportunidades oferecidas pela Trybe?

6. Concordo que imagens das minhas férias poderão ser usadas na divulgação de concursos futuros.

7. Crie um botão para enviar as informações preenchidas.

8. Interrompa o comportamento padrão do botão submit utilizando o método preventDefault(). Nossa amiga Carol Silva nos contou um pouco sobre como fazer isso, lembra?

9. Crie um botão que limpe as informações contidas nos campos;
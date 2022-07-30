function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.


  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const ulDays = document.getElementById('days');
  const newBtn = document.querySelector('.buttons-container');
  const liDay = document.getElementsByClassName('day');
  const input = document.getElementById('task-input');

/*-------------------------------------------------------------------------------------------------------*/
/*
Crie um calendário dinamicamente.
O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.
Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.
A tag <ul> deve conter o id 'days';
Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>
*/

  for(let i = 0;i < decemberDaysList.length;i++) {
    let newLi = document.createElement('li');
    newLi.innerText = decemberDaysList[i];
    newLi.classList.add('day');
    if(decemberDaysList[i] == 24 || decemberDaysList[i] == 25 || decemberDaysList[i] == 31){
      newLi.classList.add('holiday');
    }
    if(decemberDaysList[i] == 4 || decemberDaysList[i] == 11|| decemberDaysList[i] == 18 || decemberDaysList[i] == 25){
      newLi.classList.add('friday')
    }
    ulDays.appendChild(newLi);
  }

/*--------------------------------------------------------------------------------------------------------*/
/*
Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
Sua função deve receber um parâmetro com a string 'Feriados'
Adicione a este botão a ID "btn-holiday"
Adicione este botão como filho/filha da tag <div> com classe "buttons-container"*/

  function newButton(string){
    btn = document.createElement('button');
    btn.innerHTML = string;
    btn.id = 'btn-holiday'
    newBtn.appendChild(btn)
  }
  newButton('Feriados');
  const btnHoliday = document.getElementById('btn-holiday');

/*--------------------------------------------------------------------------------------------------------*/
/*Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor "rgb(238,238,238)".
*/

  function changeColorHolidays() {
    /*for(let i = 0; i < liDay.length;i++){
      let currentDay = liDay[i];
      if(currentDay.classList.contains("holiday")) liDay[i].style.backgroudColor = 'red'; 
    }*/

    if(ulDays.children[25].style.backgroundColor != 'red'){
      ulDays.children[25].style.backgroundColor = 'red';
      ulDays.children[26].style.backgroundColor = 'red';
      ulDays.children[32].style.backgroundColor = 'red';
    }
    else{
      ulDays.children[25].style.backgroundColor = '';
      ulDays.children[26].style.backgroundColor = '';
      ulDays.children[32].style.backgroundColor = '';
    }
  }
  btnHoliday.addEventListener('click', changeColorHolidays);

/*--------------------------------------------------------------------------------------------------------*/
/*
Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira". Sua função deve receber como parâmetro a string "Sexta-feira".
Adicione a esse botão o ID "btn-friday";
Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".*/

  function createButton(string) {
    let anotherBtn = document.createElement('button');
    anotherBtn.id = 'btn-friday';
    anotherBtn.innerHTML = string;
    newBtn.appendChild(anotherBtn);
  }
  createButton('Sexta-feira');

/*-------------------------------------------------------------------------------------------------------*/
/*
Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão "Sexta-feira" um evento de "click" e modifique o texto a ser exibido nos dias que são sextas-feiras.
👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.*/

  const btnFriday = document.querySelector('#btn-friday');
  function changeTextFridays(){
    if(ulDays.children[5].innerText == '4'){
      ulDays.children[5].innerText = 'Sexta-feira';
      ulDays.children[12].innerText = 'Sexta-feira';
      ulDays.children[19].innerText = 'Sexta-feira';
      ulDays.children[26].innerText = 'Sexta-feira';
    }
    else if(ulDays.children[5].innerText == 'Sexta-feira'){
      ulDays.children[5].innerText = '4'
      ulDays.children[12].innerText = '11'
      ulDays.children[19].innerText = '18'
      ulDays.children[26].innerText = '25'
    }
  }
  btnFriday.addEventListener('click' , changeTextFridays);

/*-------------------------------------------------------------------------------------------------------*/
/*Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
*/

  function zoom(event) {
    event.target.style.fontSize = '25px';
  }
  function zoomOut(event) {
    event.target.style.fontSize = '20px';
  }
  for(i = 0;i < liDay.length;i++){
    liDay[i].addEventListener('mouseover', zoom);
    liDay[i].addEventListener('mouseout', zoomOut);
  }

  /*------------------------------------------------------------------------------------------------------*/
  /*
  Implemente uma função que adicione uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
  O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".*/

  const myTasks = document.getElementsByClassName('my-tasks')[0];
  function task(string) {
    newElement = document.createElement('span');
    newElement.innerText = string;
    myTasks.appendChild(newElement)
  }
  task('Cozinhar');
  
  /*------------------------------------------------------------------------------------------------------*/
  /*
  Implemente uma função que adicione uma legenda com cor para a tarefa.
  Copiar
  Essa função deverá receber como parâmetro uma string ('cor') e criar dinamicamente um elemento de tag `<div>` com a classe `task`.
  O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
  O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".*/

  function tasksSubtitle(string) {
    newElement = document.createElement('div');
    newElement.classList.add('task');
    newElement.style.backgroundColor = string;
    myTasks.appendChild(newElement);
  }

  tasksSubtitle('green');
  

  /*------------------------------------------------------------------------------------------------------*/
  /*
  Implemente uma função que selecione uma tarefa.
  Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa, atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
  Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada.*/

  let divTasks = document.getElementsByClassName('task')
  function taskSelected(event){
    if(event.target.className == 'task'){
      event.target.classList.add('selected')
    }
    else{
      event.target.classList.remove('selected');  
    }
  }

  for(i = 0;i < divTasks.length;i++){
    divTasks[i].addEventListener('click' , taskSelected);
  }

  /*------------------------------------------------------------------------------------------------------*/
  /*Implemente uma função que atribua a cor da tarefa ao dia do calendário.
   Adicione um evento que, ao clicar em um dia do mês no calendário, atribua a esse dia a cor da legenda da sua tarefa selecionada.
   Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119)
  */

  let divSelected = document.getElementsByClassName('task selected');
  function changeDayColor(event) {
    if(event.target.style.backgroundColor != divSelected[0].style.backgroundColor){
      event.target.style.backgroundColor = divSelected[0].style.backgroundColor; 
    }
    else{
      event.target.style.backgroundColor = ''; 
    }
  }

  for(i = 0;i < liDay.length;i++){
    liDay[i].addEventListener('click', changeDayColor);
  }

  /*------------------------------------------------------------------------------------------------------*/
  /*
  Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
  Se nenhum caractere for inserido no campo input, a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
  Ao pressionar a tecla "enter" o evento também deverá ser disparado.*/

  const sectionCompromises = document.getElementById('compromises');
  const compromiseBtn = document.getElementById('btn-add');
  function compromise() {
    newCompromise = document.createElement('span');
    newCompromise.innerText = input.value + '\n';
    sectionCompromises.appendChild(newCompromise);
  }
  
  input.addEventListener('keypress', function(event){
    if (event.key == 'Enter'){
        document.getElementById('btn-add').click();
    }
  })

  compromiseBtn.addEventListener('click', compromise);

  
  
  
  


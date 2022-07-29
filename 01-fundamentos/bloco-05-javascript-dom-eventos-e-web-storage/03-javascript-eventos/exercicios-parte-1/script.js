const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');



// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function addTech(event) {

    if(event.target.id === 'second-li') {
      firstLi.classList.remove("tech");  
      secondLi.classList.add("tech");
      thirdLi.classList.remove("tech");
    } 
    else if(event.target.id === 'first-li'){
      firstLi.classList.add("tech");
      secondLi.classList.remove("tech");
      thirdLi.classList.remove("tech");
    }
    else if(event.target.id === 'third-li'){
      firstLi.classList.remove("tech");
      secondLi.classList.remove("tech");
      thirdLi.classList.add("tech");
    }
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
function techDigitada() {
  if(firstLi.className === "tech"){
    firstLi.innerText = input.value;
  }
  else if(secondLi.className === "tech"){
    secondLi.innerText = input.value;
  }
  else if(thirdLi.className === "tech"){
    thirdLi.innerText = input.value;
  }
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
function toWebPage() {
  window.location.href = "http://www.w3schools.com";
}
// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
function changeColor() {
  myWebpage.style.color = 'red';
}
myWebpage.addEventListener('mouseover', changeColor);
myWebpage.addEventListener('dblclick', toWebPage);
input.addEventListener('input', techDigitada);
firstLi.addEventListener('click', addTech);
secondLi.addEventListener('click', addTech);
thirdLi.addEventListener('click', addTech);
firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
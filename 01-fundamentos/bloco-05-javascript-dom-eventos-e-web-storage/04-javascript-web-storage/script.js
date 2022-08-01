let corpo = document.getElementsByTagName('body')[0];
let listaDeCores = document.getElementsByClassName('bg-color');
let listaDeCoresTexto = document.getElementsByClassName('txt-color')
let listaFontes = document.getElementsByClassName('font-family')
let btnChangeSize = document.getElementsByTagName('button')[0];
let input = document.getElementsByTagName('input')[0];
let input2 = document.getElementsByTagName('input')[1];
let btnChangeLineHeigth = document.getElementsByTagName('button')[1];

function changeBackgroundColor(event){
    localStorage.setItem('background-color', event.target.innerText.toLowerCase());
    corpo.style.backgroundColor = localStorage.getItem('background-color');
}
corpo.style.backgroundColor = localStorage.getItem('background-color');

for(let i = 0;i < listaDeCores.length;i++){
    let cor = listaDeCores[i];
    cor.addEventListener('click', changeBackgroundColor);
}

function changeTextColor(event){
    localStorage.setItem('text-color', event.target.innerText.toLowerCase());
    corpo.style.color = localStorage.getItem('text-color');
}
corpo.style.color = localStorage.getItem('text-color');

for(let i = 0;i < listaDeCoresTexto.length;i++){
    let color = listaDeCoresTexto[i];
    color.addEventListener('click', changeTextColor);
}

function changeFontFamily(event){
    localStorage.setItem('font-family', event.target.innerText);
    corpo.style.fontFamily = localStorage.getItem('font-family');
}

corpo.style.fontFamily = localStorage.getItem('font-family');

for(let i = 0;i < listaFontes.length;i++){
    let fontes = listaFontes[i];
    fontes.addEventListener('click', changeFontFamily);
}

function changeFontSize() {
    localStorage.setItem('font-size' , input.value);
    corpo.style.fontSize = localStorage.getItem('font-size') + 'px';
}

corpo.style.fontSize = localStorage.getItem('font-size') + 'px';

input.addEventListener('keypress' , function(event){
    if(event.key == 'Enter'){
        btnChangeSize.click();
    }
})

btnChangeSize.addEventListener('click', changeFontSize);


function changeLineHeigth(){
    localStorage.setItem('line-height', input2.value);
    corpo.style.lineHeight = input2.value + 'px';
}

corpo.style.lineHeight = input2.value + 'px';

input2.addEventListener('keypress' , function(event){
    if(event.key == 'Enter'){
        btnChangeLineHeigth.click();
    }
})

btnChangeLineHeigth.addEventListener('click', changeLineHeigth);






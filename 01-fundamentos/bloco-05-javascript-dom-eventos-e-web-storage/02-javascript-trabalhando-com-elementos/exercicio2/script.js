/**
Crie um irmão para elementoOndeVoceEsta.
Crie um filho para elementoOndeVoceEsta.
Crie um filho para primeiroFilhoDoFilho.
A partir desse filho criado, acesse terceiroFilho.
 */
document.getElementById('pai').appendChild(document.createElement('section'));
document.getElementById('elementoOndeVoceEsta').appendChild(document.createElement('section'));
document.getElementById('primeiroFilhoDoFilho').appendChild(document.createElement('section'));

let parent = document.querySelector('#primeiroFilhoDoFilho section').parentElement;
parent.parentElement.nextElementSibling;
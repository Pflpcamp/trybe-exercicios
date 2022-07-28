/*Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.*/
const pai = document.getElementById('pai');

for(i = pai.children.length - 1;i >= 0;i--){
    let section = pai.children[i]
    if(section.id !== 'elementoOndeVoceEsta'){
        section.remove();
    }
}

document.querySelector('#elementoOndeVoceEsta #segundoEUltimoFilhoDoFilho').remove();
/*let elementList = document.getElementById('pai').children;*/
const pai = document.getElementById('pai');

for(i = pai.children.length - 1;i >= 0;i--){
    let section = pai.children[i]
    if(section.id !== 'elementoOndeVoceEsta'){
        section.remove();
    }
}

document.querySelector('#elementoOndeVoceEsta #segundoEUltimoFilhoDoFilho').remove();
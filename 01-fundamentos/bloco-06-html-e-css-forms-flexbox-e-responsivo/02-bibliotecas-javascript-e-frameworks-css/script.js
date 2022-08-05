const btnEnviar = document.getElementById('botao-enviar');
const btnApagar = document.getElementById('botao-apagar');
const formField = document.getElementById('form-field');
const radio = document.getElementsByClassName('radio')
const inputRadio = document.getElementById('input-checkbox-2');
const inputValidation = document.getElementsByClassName('input-validation');

btnEnviar.addEventListener('click', function(event){
    if(inputRadio.checked == false){
        event.preventDefault();
    }
    for(let i = 0;i < inputValidation.length;i++){
        if(inputValidation[i].validity.tooShort == true || inputValidation[i].validity.tooLong == true){
          alert('Dados Invalidos')
        }
    }
})

btnApagar.addEventListener('click', apagarForms);
function apagarForms() {
    for(let i = 0;i < formField.children.length;i++){
        formField.children[i].value = '';
    }
    for(let j = 0;j < radio.length;j++){
        radio[i].checked = false;
    }
}
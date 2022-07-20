/*Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.*/

const salarioBruto = 20000;
let salarioBase
let salarioLiquido

if(salarioBruto <= 1556.94){
    salarioBase = salarioBruto - (salarioBruto*8/100)
}
else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    salarioBase = salarioBruto - (salarioBruto*9/100);
}
else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    salarioBase = salarioBruto - (salarioBruto*11/100);
}
else if(salarioBruto > 5189.82){
    salarioBase = salarioBruto - 570.88;
}

if(salarioBase <= 1903.98){
    salarioLiquido = salarioBase;
}
else if(salarioBase >= 1903.99 && salarioBase <= 2826.65){
    salarioLiquido = salarioBase - ((salarioBase*7.5/100)- 142.80)
}
else if(salarioBase >= 2826.66 && salarioBase <= 3751.05){
    salarioLiquido = salarioBase - ((salarioBase*15/100)- 354.80)
}
else if(salarioBase >= 3751.06 && salarioBase <= 4664.68){
    salarioLiquido = salarioBase - ((salarioBase*22.5/100)- 636,13)
}
else if(salarioBase > 4664.68){
    salarioLiquido = salarioBase - ((salarioBase*27.5/100)- 869.36)
}

console.log(salarioLiquido)


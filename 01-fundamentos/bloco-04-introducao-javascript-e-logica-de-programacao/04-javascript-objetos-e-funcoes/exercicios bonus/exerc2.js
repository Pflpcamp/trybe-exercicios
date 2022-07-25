/*Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.*/

function arrayOfNumbers(array){
    let arr = [];
    let dentroArray;
    for(let i = 0;i < array.length;i++){
        for(let j = 0;j < array[i].length;j++){
            dentroArray = array[i];
            if(dentroArray[j] % 2 == 0){
                arr.push(dentroArray[j]);
            }
        }
    }
    return arr;
}

console.log(arrayOfNumbers([[1, 2], [3,4,5,6], [7,8,9,10]]));
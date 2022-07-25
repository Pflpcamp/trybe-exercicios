/**Agora inverta o lado do triângulo. */

let n = 5;
let line = '';
let symbol = '*';




for(let i = 0;i < n;i++){
    for(let j = 0;j < i+1;j++){
        line = line + symbol;
    }
    for(x = 0; x < n - i;x++){
        line = ' ' + line;
    }
    console.log(line);
    line = ''
}
var n1 = 3;
let n2 = 1;

if(true){
    let n2 = 10;
    var n1 = 15;
    var resultadodoescopo  = n1 + n2;
}

var resultado = n1 + n2;

console.log('n1 + n2 = resultado = ' + resultado);
console.log('n1 + n2 = resultadodoescopo = ' + resultadodoescopo);
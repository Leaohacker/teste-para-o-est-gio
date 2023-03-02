
const numero = 8;

function fibonacci (numero) {
    if (numero <= 1){
        return [0, 1];
    }else {
        const fib = fibonacci(numero-1);
        fib.push(fib[fib.length-1] + fib[fib.length-2]);
        return fib;
    }
}
const fibnova = fibonacci (numero);
if (fibnova.includes(numero)){
    console.log("pertence à sequência");
 }else {
    console.log(" não pertence à sequência");
}
console.log(fibnova);


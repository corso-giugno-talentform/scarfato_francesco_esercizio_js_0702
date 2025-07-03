/**
 * Esercizio 7.1: Crea una funzione calcolatrice che prenda 
 * tre parametri (numero1, numero2, operazione) e restituisca il risultato.
 * L'operazione può essere "+", "-", "*", "/".
 * 
*/

console.log('3 + 4 = ' + calcolatrice(3, 4, '+'));
console.log('3 - 4 = ' + calcolatrice(3, 4, '-'));
console.log('3 * 4 = ' + calcolatrice(3, 4, '*'));
console.log('3 / 4 = ' + calcolatrice(3, 4, '/'));

function calcolatrice(x, y, opCode) {
    let retVal = 0;

    switch (opCode) {
        case "+":
            retVal = x + y;
            break;
    
        case "-":
            retVal = x - y;
            break;
    
        case "*":
            retVal = x * y;
            break;
    
        case "/":
            if (y != 0) {
                retVal = x / y;
            } else {
                retVal = 'NaN';
            }
            break;
    
        default:
            break;
    }

    return retVal;
}
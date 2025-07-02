let max = 20;
let oddNumbers = '';
let evenNumbers = '';

for(let i = 1; i <= max; i++) {
    let check = oddEven(i);

    if (check == true) {
        evenNumbers += i + ', ';
    } else {
        oddNumbers += i + ', ';
    }
}

console.log('Numeri dispari = ' + oddNumbers);
console.log('Numeri pari = ' + evenNumbers);

function oddEven(x) {
    return (x % 2 === 0) ? true : false;
}


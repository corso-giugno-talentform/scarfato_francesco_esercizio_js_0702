for(let i = 1; i < 11; i++) {
    let check = oddEven(i);
    let message = null;

    message = (check == true) ? 'Pari' : 'Dispari';

    console.log(i + ' ' + message);
}

function oddEven(x) {
    return (x % 2 === 0) ? true : false;
}


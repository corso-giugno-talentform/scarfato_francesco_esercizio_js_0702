// 6.3
for (let i = 1; i < 31; i++) {
    let message = i;

    let multi3 = multi3(i);
    let multi5 = multi5(i);

    if (multi3 == true && multi5 == false) {
        message = 'Francesco';
    }

    if (multi3 == false && multi5 == true) {
        message = 'Scarfato';
    }

    if (multi3 == true && multi5 == true) {
        message = 'Francesco Scarfato';
    }

    console.log(message);
}

function multi3(x) {
    return (i % 3 === 0) ? true : false;
}

function multi5(x) {
     return (i % 5 === 0) ? true : false;
}
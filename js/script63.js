// 6.3
for(let i = 1; i < 31; i++) {
    let multi3 = i % 3;
    let multi5 = i % 5;
    // let multi15 = i % 15;
    let message = i;

    if (multi3 === 0 && multi5 !== 0) {
        message = 'Francesco';
    }

    if (multi5 === 0 && multi3 !== 0) {
        message = 'Scarfato';
    }

    if (multi3 === 0 && multi5 === 0) {
        message = 'Francesco Scarfato';
    }

    // if (multi15 === 0) {
    //     message = 'Francesco Scarfato';
    // }

    console.log(message);
}
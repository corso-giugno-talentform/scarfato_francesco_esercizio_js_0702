// 6.2
let numero = 3;
for(let i = 1; i < 11; i++) {
    if (i == 5) {
        continue;
    }
    console.log(numero + ' * ' 
        + i
        + ' = ' +
        numero * i
    );
}
const MAGGIORE_ETA = 18;
const BAMBINO_MIN = 0;
const BAMBINO_MAX = 12;
const ADOLESCENTE_MIN = 13;
const ADOLESCENTE_MAX = 17;
const ADULTO_MIN = 18;
const ADULTO_MAX = 64;
const ANZIANO = 65;


let eta = ADULTO_MAX;

if (eta < 0) {
    console.log('Non puoi avere una età < 0 hai inserito ' + eta);
} else {

    if (eta >= BAMBINO_MIN && eta <= BAMBINO_MAX) {
        console.log('Hai inserito: ' + eta
            + ' - Vai a giocare che puoi ancora!');
    } else if (eta >= ADOLESCENTE_MIN && eta <= ADOLESCENTE_MAX) {
        console.log('Hai inserito: ' + eta
            + '- Pensa a studiare');
    } else if (eta >= ADULTO_MIN && eta <= ADULTO_MAX) {
        console.log('Hai inserito: ' + eta
            + ' - Ora ti tocca lavorare!');
    } else {
        console.log('Hai inserito: ' + eta
            + '- Goditi la pensione tu che puoi!');
    }
}
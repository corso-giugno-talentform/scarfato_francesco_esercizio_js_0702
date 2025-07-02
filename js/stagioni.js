const today = new Date();

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth
let month = today.getUTCMonth();  // 0 -> 11 Jan Dec

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDate
let day = today.getUTCDate();     // Day of the month

// Consideriamo la stagione metereologica non quella astronomica
// perché dovremmo considerare anche il giorno

let stagione = '';

switch (month) {
    case 11: // Dicembre
    case  0: // Gennaio
    case  1: // Febbraio
        stagione = 'Inverno';
        break;    
    case 2: // Marzo
    case 3: // Aprile
    case 4: // Maggio
        stagione = 'Primavera';
        break;    

    case 5: // Giugno
    case 6: // Luglio
    case 7: // Agosto
        stagione = 'Estate';
        break;    

    case  8: // Settembre
    case  9: // Ottobre
    case 10: // Novembre
        stagione = 'Autunno';
        break;    

    default:
        break;
}

console.log('oggi è il ' + day
    + ' del ' + month
    + ' siamo in ' + stagione
);

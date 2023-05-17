//chiedere all'utente quanti chilometri dovrà percorrere
let kilometri = parseInt(prompt('Quanti kilometri dovrai percorrere?').trim());

// costante prezzo base
const costo_base = 0.21;

// totale biglietto
let totale = (kilometri * costo_base);

//eta utente
let eta = parseInt(prompt('Quanti anni hai?').trim());

let sconto;

let prezzo_scontato;


// condizioni + risultato in pagina
if (eta < 18) {
    sconto = (totale * 20 / 100);

    prezzo_scontato = (totale - sconto);

    document.getElementById('prezzo_finale').innerHTML = prezzo_scontato.toFixed(2) + '€';

} else if ( eta >= 65) {
        sconto = (totale * 40 / 100);
    
        prezzo_scontato = (totale - sconto);

        document.getElementById('prezzo_finale').innerHTML = prezzo_scontato.toFixed(2) + '€';
} else {
    document.getElementById('prezzo_finale').innerHTML = totale.toFixed(2) + '€';
}




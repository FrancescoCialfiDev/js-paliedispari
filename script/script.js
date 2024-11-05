// Applichiamo controlli ristretti del codice
"Use strict"
// Console Clear
console.clear();

// Chiediamo all'utente di inserire una parola

let parola = prompt("Inserisci una parola")




// Chiamo / Invoco la funzione creata
wordReversed (parola)


// Creaiamo la funzione

function wordReversed (word) {
    let parolaGirata = parola.split('').reverse().join('');
    console.log(parolaGirata)
}





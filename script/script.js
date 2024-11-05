// Applichiamo controlli ristretti del codice
"Use strict"
// Console Clear
console.clear();

// Chiediamo all'utente di inserire una parola

let parola = prompt("Inserisci una parola")
let valore = wordReversed ();




// Chiamo / Invoco la funzione creata
wordReversed (parola)


// Creaiamo la funzione

function wordReversed (word) {
    let parolaGirata = parola.split('').reverse().join('');
    return parolaGirata;
}

if (valore !== parola ) {
    console.log("La parola" + " " + parola + " " + "non è palindroma")
} else {
    console.log("La parola" + " " + parola + " " + "è palindroma");
    
}





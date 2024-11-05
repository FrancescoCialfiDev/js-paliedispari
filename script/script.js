// Applichiamo controlli ristretti del codice
"Use strict"
// Console Clear
console.clear();


//______ESERCIZIO_N1_________________________________________
// Chiediamo all'utente di inserire una parola

//palindromo()

function palindromo() {
    let parola = prompt("Inserisci una parola").toLocaleLowerCase();
    let valore = wordReversed(parola);




    // Chiamo / Invoco la funzione creata
    wordReversed(parola)


    // Creaiamo la funzione

    function wordReversed(word) {
        let parolaGirata = parola.split('').reverse().join('');
        return parolaGirata;
    }

    if (valore !== parola) {
        console.log("La parola" + " " + parola + " " + "non è palindroma")
    } else {
        console.log("La parola" + " " + parola + " " + "è palindroma");

    }
}
//_______________________________________________

//______ESERCIZIO_N2_________________________________________

//PariODispariGame ()

function PariODispariGame () {
    let giocatoreNumber = parseInt(prompt("Inserisci un numero da uno a cinque"))
console.log(giocatoreNumber);
let pariODispari = prompt("Scegli Pari o Dispari")
console.log(pariODispari);
let randomNumberComputer = randomNumber(5, 1);
console.log(randomNumberComputer);
let somma = randomNumberComputer + giocatoreNumber;
let risultatoSomma = calcolo ();

randomNumber(5, 1)
function randomNumber(max, min) {
    let numero = Math.floor(Math.random() * (max - min + 1)) + min;
    return numero;
}

function calcolo () {
    somma= somma % 2 === 0
    return somma;
}

if (risultatoSomma === true && pariODispari === "Pari" ) {
    console.log("Hai Vinto") 
} else {
    console.log("Hai Perso") 
}
}
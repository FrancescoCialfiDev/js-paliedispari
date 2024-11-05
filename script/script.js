// Applichiamo controlli ristretti del codice
"Use strict"
// Console Clear
console.clear();

// Scegli il gioco

let scegliGioco = prompt("Scegli a quale gioco vuoi giocare: morra oppure palindromo")
if (scegliGioco === "morra") {
    PariODispariGame()
} else if (scegliGioco === "palindromo") {
    palindromo();
} else {
    console.log("Questo gioco non esiste");

}

//______ESERCIZIO_N1_________________________________________
// Chiediamo all'utente di inserire una parola
function palindromo() {
    
    // Dichiaro le variabili
    let parola = prompt("Inserisci una parola").toLocaleLowerCase();
    let valore = wordReversed(parola);

    // Chiamo / Invoco la funzione creata
    wordReversed(parola)
    // Creaiamo la funzione
    function wordReversed(word) {
        let parolaGirata = parola.split('').reverse().join('');
        return parolaGirata;
    }
    // Creiamo la condizione
    if (valore !== parola) {
        console.log("La parola" + " " + parola + " " + "non è palindroma")
    } else {
        console.log("La parola" + " " + parola + " " + "è palindroma");
    }
}
//_______________________________________________

//______ESERCIZIO_N2_________________________________________

//PariODispariGame ()
// Chiamo - Invoco la funzione
function PariODispariGame() {
    // Dichiaro le variabili 
    let giocatoreNumber = parseInt(prompt("Inserisci un numero da uno a cinque"))
    console.log(giocatoreNumber);
    let pariODispari = prompt("Scegli Pari o Dispari")
    console.log(pariODispari);
    let randomNumberComputer = randomNumber(5, 1);
    console.log(randomNumberComputer);
    let somma = randomNumberComputer + giocatoreNumber;
    let risultatoSomma = calcolo();

    // Creo una funziione per generare un numero randomico e ritorno il valore a randomNumberComputer
    randomNumber(5, 1)
    function randomNumber(max, min) {
        let numero = Math.floor(Math.random() * (max - min + 1)) + min;
        return numero;
    }

    // Creo una funzione per eseguire un calcolo tra il numero che scrive l'user e quello del computer. Ci restituisce valore tru o false
    function calcolo() {
        somma = somma % 2 === 0
        return somma;
    }

    // Creo la condizione per stabilire che se il risultato della somma è divisibile per 2 con resto zero, quindi pari mi darà risultato true
    // Quindi se risultato sarà uguale a true avrai vinto, altrimenti avrai perso.
    if (risultatoSomma === true && pariODispari === "Pari") {
        console.log("Hai Vinto")
    } else {
        console.log("Hai Perso")
    }
}
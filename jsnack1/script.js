// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

// 1. Far inserire all'utente due numeri -> Prompt

// 2. Confrontare i due numeri
//  2.1 Confronto il primo numero con il secondo -> If

// 3. Stampo il numero maggiore -> console.log

// Inserimento dei numeri
const num1 = parseInt(prompt("Inserisci un numero: "));
const num2 = parseInt(prompt("Inserisci un altro numero: "));

// Confronto dei due numeri
if (num1 > num2) {
// Se se num1 è maggiore di num2, stampa num1
    console.log("Il numero più grande è ", num1);

} else if (num1 < num2) {
    // Se se num1 è minore di num2, stampa num2
    console.log("Il numero più grande è ", num2);

} else {
    // Altrimenti sono uguali
    console.log("I numeri sono uguali");

}
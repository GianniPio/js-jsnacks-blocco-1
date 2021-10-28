// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// 1. Far inserire all'utente due parole -> prompt

// 2. Confronto le due parole -> lenght
//  2.1 Prendere la lunghezza di entrambe le parole

// 3. Stampa le parole, prima la più corta, poi la più lunga ->if
//  3.1 Confronto la prima parola con la seconda, se è più corta stampo
//  3.2 Altrimenti stampo prima la seconda e poi la prima


const fistWord = prompt("Inserisci una parola");

const secondWord = prompt("Inserisci un'altra parola");

if (fistWord.length < secondWord.length) {
    
    console.log(fistWord);
    console.log(secondWord);

} else if (fistWord.length > secondWord.length) {

    console.log(secondWord);
    console.log(fistWord);
} else {

    console.log("Le parola hanno la stessa lunghezza");
}
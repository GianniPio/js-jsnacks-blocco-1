// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// 1. Creare una lista contente il nome degli invitati

// 2. Chiedere all'utente il proprio nome

// 3. Confrontare il nome dell'utente con quelli della lista
//  3.1 Creo una variabile booleana
//  3.2 Confronto il nome dell'utente con quelli della lista -> for
//  3.3 Uso la variabile booleana per capire se il nome è presente -> if

// 4. Comunico se può partecipare o no -> if
//  4.1 Se la variabile bolleana è vera, allora può partecipare
//  4.2 Altrimenti no

// Lista degli invitati
// generare un array contenente una lista di nomi

const listParty = ["Gatsby", "Gianni", "Loris", "Simone", "Adriano"];

console.log(listParty);


// l'utente scrive il nome

const userName = prompt("Inserire il tuo nome");

// variabile per capire se il nome c'è
let trovato = false;

// inserire un for e un if che controlla che il nome dell'utente è dentro la lista

for (let i = 0; i < listParty.length; i++) {

    // creo variabile che prende il valore i-esimo della lista
    var element = listParty[i];
    
    // se il nome dell'utente è uguale ad un nome della lista la variabile "trovato" diventa true
    if (userName == element) {
        trovato = true;
    }
}

    
    if (trovato == true) {
        // se la variaibile è true stampa, l'utente può entrare
        console.log (`Perfetto ${userName}, sei il benvenuto alla festa del Grande Gatsby`);
    } else {
        // altrimenti non è nella lista
        console.log("Non puoi partecipare alla festa del Grande Gatsby");
    }
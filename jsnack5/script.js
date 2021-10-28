// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

// 1.Creare un array vuoto

// 2. chiedere all'utente di inserire per 6 volte un numero -> for

// 3. Inserire i numeri nella lista
//  3.1 Controllare che il numero sia dispari

const listNum = [];

for (let i = 0; i < 6; i++) {

    let num = parseInt(prompt("Inserisci un numero"));

    if (num % 2 != 0) {
        
        listNum.push(num);

    }
}

console.log(listNum);
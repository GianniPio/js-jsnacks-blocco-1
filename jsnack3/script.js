// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// 1. Chiedere all'utente 10 numeri
    //  1.1 Creare un array vuoto
    //  1.2 Far inserire 10 numeri -> for/prompt

// 2. Stampare la somma dei numeri inseriti
    // 2.1 Valora sommma iniziale = 0
    // 2.2 Sommare nel valore somma i valori dell'array


    const listNum = [];
 

    for (let i = 0; i < 10; i++) {
        
        listNum[i] = parseInt(prompt("Inserisci un numero"));
        
    }

   let somma = 0;

   for (let i = 0; i < listNum.length; i++) {
       
        somma += listNum[i];
       
   }

    console.log(listNum);
    console.log(somma);

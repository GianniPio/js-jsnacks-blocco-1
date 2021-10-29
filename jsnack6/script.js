// Genera un array di 50 numeri random. Nell’array non devono esserci doppioni.

//1. Generare un array di 50 numeri -> while
    //  1.1 Inserire numeri random


//2. Controllare che nell'array non ci siamo numeri doppioni
    // 2.1 Tramite variabile controllare che non si siano doppioni ->
    // 2.2 Se ci sono doppioni la variabile diventa vera, se è falsa salva il numero nell'array -> for/if

const arrayNum = [];

while (arrayNum.length < 50) {

    let number = Math.floor(Math.random() * 100) + 1;

    let duplicate = false;

    for (let i = 0; i < arrayNum.length; i++) 
        
        if (arrayNum[i] === number) {

            duplicate = true;
        }
        
    }

    if (duplicate == false) {
        
        arrayNum.push(number);

    }
    
}

console.log(arrayNum);

// Genera un array di 50 numeri random. Nell’array non devono esserci doppioni.

//1. Generare un array di 50 numeri -> for

//2. Controllare che nell'array non ci siamo numeri doppioni -> if

const arrayNum = [];
const arrRandom = [];
let i = 0;
while (arrayNum.length < 50) {

    let number = Math.floor(Math.random() * 100) + 1;

    arrRandom.push(number);

   for (let i = 0; i < arrRandom.length + 1; i++) {

    
       
   }

    console.log(arrayNum[number]);

}


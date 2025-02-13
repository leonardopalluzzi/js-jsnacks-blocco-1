/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.*/

const oddNumbers = [];

for (let i = 0; i < 6; i++){
    let userNumber = Number(prompt(`inserire il ${i + 1} numero`));
    if (userNumber % 2 != 0){
        oddNumbers[i] = userNumber;
    }
}

console.log(oddNumbers);
alert(`i numeri dispari sono ${oddNumbers}`)
/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.*/

const numbers = [];
let somma = 0;

for (let i = 0; i < 10; i++) {
    let userNumber = Number(prompt(`inserisci il ${i + 1} numero`));
    if (isNaN(userNumber)) {
        alert('inserire solo valori numerici');
        break;
    } else {
        numbers[i] = userNumber
        somma = somma + numbers[i];
    }
}

console.log(numbers);
console.log(`la somma dei valori inseriti e ${somma}`);
alert(`la somma dei valori inseriti e ${somma}`);

location.reload();
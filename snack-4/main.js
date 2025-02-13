/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.*/

const oddNumbers = [];
let flag = true;

for (let i = 0; i < 6; i++){
    let userNumber = Number(prompt(`inserire il ${i + 1} numero`));
    if(isNaN(userNumber)){
        alert('inserire solo valori numerici')
        flag = false;
        break;
    } else if (userNumber % 2 != 0){
        oddNumbers[i] = userNumber;
    }
}

console.log(oddNumbers);
if (flag == true && oddNumbers.length > 0){
    alert(`i numeri dispari sono ${oddNumbers}`);
} else if (flag == true && oddNumbers.length == 0) {
    alert('hai inserito solo valori pari');
}

location.reload();
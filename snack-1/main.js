/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */


const firstNumber = Number(prompt('inserire il primo numero'));
const secondNumber = Number(prompt('isnerisci il secondo numero'));
console.log(firstNumber, secondNumber);

if (isNaN(firstNumber) || isNaN(secondNumber)){
    alert('input non valido');
} else if (firstNumber > secondNumber) {
    alert(`${firstNumber} e il maggiore`);
} else if (secondNumber > firstNumber) {
    alert(`${secondNumber} e il maggiore`);
} else {
    alert('i due numeri sono auguali');
}


location.reload();
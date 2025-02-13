/*L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/

const firstWord = prompt('inserire la prima parola');
const secondWord = prompt('inserire la seconda parola');

console.log(firstWord, secondWord);

if(firstWord.length > secondWord.length){
    alert(`"${secondWord}"e piu corta di "${firstWord}"`);
} else if (secondWord.length > firstWord.length){
    alert(`"${firstWord}"e piu corta di "${secondWord}"`);
} else {
    alert('le due parole hanno la setessa lunghezza');
}

location.reload();
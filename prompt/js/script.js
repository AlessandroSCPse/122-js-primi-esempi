// Sommare 5 al numero che mi da l'utente e stampo in pagina.

// prendo il numero dall'utente
const userNumber = prompt('Dimmi un numero');

// convertire in un tipo di dato numero
let userNumberAsNumeric = parseInt(userNumber);

// Faccio la somma
let sum = userNumberAsNumeric + 5;

// Stampo il risultato
const userMessage = 'Il risultato è ' + sum;
// alert(userMessage);
document.getElementById('message').innerHTML = userMessage;
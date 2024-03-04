// Chiediamo all'utente il suo nome e inseriamo in pagina la stringa "ciao <nome_utente>"

// Ci serve: nome dell'utente
const userName = prompt('Ciao dimmi il tuo nome');
console.log(userName);

// let userMessage = 'ciao ' + userName;
let userMessage = `ciao ${userName}`;

document.getElementById('message').innerHTML = userMessage;
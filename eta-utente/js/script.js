// Chiediamo all'utente la sua età e comunichiamo l'anno di nascita.

// ACQUISIZIONE E PREPARAZIONE DEI DATI
// Ci servono: anno corrente e l'età dell'utente
const currentYear = 2024;
// chiedo l'età all'utente
const userAge = prompt('Ciao dimmi la tua età');
// Converto userAge in un tipo di dato numero
const userAgeAsNumber = parseInt(userAge);

// LOGICA DELLA MIA APPLICAZIONE
// Anno corrente - età
const ageOfBirth = currentYear - userAgeAsNumber;
console.log(ageOfBirth);

// OUTPUT ALL'UTENTE
const userMessage = 'Il tuo anno di nascita è ' + ageOfBirth;
document.getElementById('message').innerHTML = userMessage;
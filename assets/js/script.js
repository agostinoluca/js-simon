/* 
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. 
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). 
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// collego gli elementi della dom
const resultEl = document.getElementById('resultEl');
const finalEl = document.getElementById('finalEl');
const adviseEl = document.getElementById('adviseEl');
const finalAdviseEl = document.getElementById('finalAdviseEl');
const finalReportEl = document.getElementById('finalReportEl');
const clock = document.getElementById('clock');

// creo una array dove pushare i numeri casuali
const randomNumbers = [];

// richiamo la funzione per generare i numeri casuali in pagina
generateRandomNumber(); 

// imposto un timer di 30 secondi visibile in pagina
let i = 30;
const timerInterval = setInterval(function() {
  if (i > 0) {
    clock.innerText = i;
    i--;
    clock.classList.add('animation');
  } else {
    // quando il timer raggiunge 0, interrompo il setInterval
    clearInterval(timerInterval);
    clock.innerText = 0;
    clock.classList.remove('animation');
    
    // svuoto il contenuto dell'elemento della dom
    resultEl.innerHTML = '';
    adviseEl.innerText = '';
  };
}, 1000);

// imposto un timeout di 32s per permettere al cronometro di arrivare a 0
setTimeout(() => {
  // creo una array dove pushare i numeri inseriti dall'utente
  const inputNumbers = [];
  // itero i prompt per 5 volte
  for (let i = 0; i < 5; i++) {
    const inputNumber = prompt('Quali numeri hai visto?\nInseriscine uno alla volta.');
    // pusho i numeri inseriti nella array
    inputNumbers.push(inputNumber);
  };
  
  // comparo i numeri inseriti con quelli generati casualmente utilizzando un forEach
  const correctNumbers = [];
  inputNumbers.forEach(number => {
    if (randomNumbers.includes(parseInt(number, 10))) {
      correctNumbers.push(number);
    }
  });
  console.log(correctNumbers);

  // nascondo il cronometro
  clock.className = 'd-none';

  // aggiunto un advise precedente ai numeri inseriti dall'utente
  adviseEl.innerHTML = `<h1>HAI INSERITO I SEGUENTI NUMERI:</h1>`;
  
  // stampo in pagina i numeri inseriti dall'utente
  for (let i = 0; i < inputNumbers.length; i++) {
    const inputNumber = inputNumbers[i];
    // creo un div
    const colDiv = document.createElement('div');
    // assegno le classi al div
    colDiv.classList.add('col', 'text-center');
    // scrivo dentro il numero
    colDiv.textContent = inputNumber;
    // appendo il tutto alla dom
    resultEl.appendChild(colDiv);
  };

  // aggiunto un advise precedente ai numeri randomici generati in avvio
  finalAdviseEl.innerHTML = `<h1>I NUMERI DA RICORDARE ERANO:</h1>`;

  // stampo in pagina i numeri randomici iniziali
  for (let i = 0; i < randomNumbers.length; i++) {
    const randomNumber = randomNumbers[i];
    // creo un div
    const colDiv = document.createElement('div');
    // assegno le classi al div
    colDiv.classList.add('col', 'text-center');
    // scrivo dentro il numero
    colDiv.textContent = randomNumber;
    // appendo il tutto alla dom
    finalEl.appendChild(colDiv);
  };

  // stampo in pagina un report finale annunciando il risultato
  finalReportEl.innerText = (`Hai ricordato ${correctNumbers.length} numeri su 5!`);

}, 32000);



// con una funzione creo dei numeri random e li appendo alla dom
function generateRandomNumber() {
  // itero il ciclo di operazioni 5 volte
  for (let i = 0; i < 5; i++) {
    // creo un numero casuale tra 1 e 10 approssimato per difetto
    const number = Math.floor(Math.random() * 50) + 1;
    // pusho il numero ottenuto nella array randomNumbers
    randomNumbers.push(number);

    // creo un div
    const colDiv = document.createElement('div');
    // assegno le classi al div
    colDiv.classList.add('col', 'text-center');
    // scrivo dentro il numero casuale ottenuto
    colDiv.textContent = number;
    // appendo il tutto alla dom
    resultEl.appendChild(colDiv);
  };
};




/* 
Il software risponde correttamente alla consegna, ma comprendo che la strada intrapresa è molto più complessa del dovuto.

PROBLEMI RICONOSCIUTI:
-randomNumber genera anche numeri identici e anche l'utente può inserire nei prompt numeri identici 
 (dovrei creare una condizione più complessa per non far accettare numeri già pushati nelle array di randomNumbers e inputNumbers);

-sempre sul prompt devo fixare l'inserimento del dato e chiedere esclusivamente numeri;

-ho creato troppi nodi della dom nominandoli in maniera confusa (ho aggiunto pezzi inizialmente non programmati);

-bisogna snellire il codice, ad esempio creare una function per creare dinamicamente i div e non essere ripetitivo;
*/
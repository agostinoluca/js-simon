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
    
    // creo il markup con una funzione
    displayNumbers(resultEl, inputNumber);
  };

  // aggiunto un advise precedente ai numeri randomici generati in avvio
  finalAdviseEl.innerHTML = `<h1>I NUMERI DA RICORDARE ERANO:</h1>`;

  // stampo in pagina i numeri randomici iniziali
  for (let i = 0; i < randomNumbers.length; i++) {
    const randomNumber = randomNumbers[i];

    // creo il markup con una funzione
    displayNumbers(finalEl, randomNumber);

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

    // creo il markup con una funzione
    displayNumbers(resultEl, number);
  };
};


// funzione per creare il div, assegnare classi, inserire il numero e appendere al container
/**
 * 
 * @param {HTMLElement} container -> il contenitore a cui appendere i div creati
 * @param {string} text -> il valore si aspetta una stringa (nel nostro caso sarà un numero)
 */
function displayNumbers(container, text) {
  const div = document.createElement('div');
  div.textContent = text;
  div.classList.add('col', 'text-center');
  container.appendChild(div);
};
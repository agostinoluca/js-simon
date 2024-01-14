/* 
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. 
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). 
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// collego gli elementi della dom
const resultEl = document.getElementById('resultEl');
const adviseEl = document.getElementById('adviseEl');
const clock = document.getElementById('clock');

// creo una array dove pushare i numeri casuali
const randomNumber = [];

// con una funzione creo dei numeri random e li appendo alla dom
function generateRandomNumber() {
  // itero il ciclo di operazioni 5 volte
  for (let i = 0; i < 5; i++) {
    // creo un numero casuale tra 1 e 10 approssimato per difetto
    const number = Math.floor(Math.random() * 10) + 1;
    // pusho il numero ottenuto nella array randomNumber
    randomNumber.push(number);

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

generateRandomNumber(); 

// imposto un timer di 30 secondi visibile in pagina
let i = 3;
const timerInterval = setInterval(function() {
  if (i > 0) {
    clock.innerText = (i);
    i--;
    clock.classList.add('animation');
  } else {
    // quando il timer raggiunge 0, interrompo il setInterval
    clearInterval(timerInterval);
    clock.innerText = 0;
    clock.classList.remove('animation');
    
    // svuoto il contenuto dell'elemento della dom
    resultEl.innerHTML = ('');
    adviseEl.innerHTML = ('');
  }
}, 1000);


// avvio 5 prompt chiedendo i numer

// comparo i numeri inseriti con quelli generati casualmente

// annuncio il risultato
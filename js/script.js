/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata. 
Ogni cella ha un numero progressivo, da 1 a 100. 
Ci saranno quindi 10 caselle per ognuna delle 10 righe. 
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
 */

// COSA MI SERVE?

// V Una funzione event listener per il bottone (per far apparire la griglia) 
// V Un ciclo for per moltiplicare i singoli box
// V Una funzione event listener per il clic dei singoli box


// inizio prendendo il container con il suo #id


// inizializzo un cilo di 100
let button = document.getElementById("play");
const boxContainer = document.getElementById("box-container");


button.addEventListener("click", function(){    
boxContainer.classList.remove("d-none"); 
button.addEventListener("click", function(){    //Add a click function to refresh the play button
boxContainer.innerHTML =""; 
})   
})   
    for (let i = 1; i <= 100; i++){
       
        let box = document.createElement("div"); //creo un div 
        box.setAttribute("class", "single-box"); //al div assegno la classe box
        box.innerHTML=i;
        boxContainer.appendChild(box); // e lo rendo figlio dell'id box-container
        // aggiungo funzione per cambiare il colore dei singoli box
        // Creo un primo eventListener per il primo click
       
       box.addEventListener ("click", function(){ 
            box.classList.add("bg-color");
            console.log(`Hai selezionato la casella ${box.innerHTML}`);
       
         })
    
    }
let tmpHtml ="";
const newElement = document.getElementById("left-header");
let logo = document.createElement("img");
logo.innerHTML = '<img>';
logo.setAttribute('src',`img/logo.png`);
logo.classList.add("logo-boolean");
newElement.appendChild(logo);
tmpHtml += `<img src="img/logo.png">`;

/* Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba. */

let randomNumber = [];
let list = [1, 3, 5, 7, 8, 9, 11, 12, 13, 14, 16, 20, 25, 30, 64, 59];
console.log(generateNumber(1, 16, list));

function generateNumber (min, max, blacklist){
    let found = false;
    while (found === false){
    
     
    }
   
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}



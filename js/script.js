/*

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata
si colora di azzurro ed emetto un messaggio in console
con il numero della cella cliccata.
Potete realizzare lo stile che volete, 
sin quando tutto è leggibile con facilità

*/


const playButton = document.querySelector("#play-button");

playButton.addEventListener("click", function() {

    // mi salvo la griglia in una variabile
    const gridElement = document.querySelector("#grid");


    // codice per generare la griglia
    let cellNumber;

    // test: stampiamo il valore della select
    const selectElement = document.querySelector("#difficulty");
    console.log(selectElement.value)

    // cambio il numero di celle da creare in base alla difficoltà
    if(selectElement.value == "easy") {

        cellNumber = 100;

    } else if (selectElement.value == "medium") {

        cellNumber = 81;

    } else {

        cellNumber = 49;

    }

    // imposto la classe della griglia in base alla difficoltà
    // questa verrà gestita dal css per ridimensionare correttamente i quadrattini
    gridElement.className = selectElement.value;


    // resetto la griglia in modo che alla nuova pressione del pulsante
    // non aggiunga le griglie una sotto l'altra
    gridElement.innerHTML = "";

    // facciamo comparire la griglia
    gridElement.style.display = "flex";


    for(let i = 0; i < cellNumber; i++) {

        // creo un elemento
        const newElement = document.createElement("div");
        // do la classe cell
        newElement.classList.add("cell");
        // ci scrivo dentro il numero 
        newElement.innerHTML = i + 1;
        // lo aggiungo alla griglia
        gridElement.append(newElement);


        // aggiungo un event listener del click ad ogni cella
        newElement.addEventListener("click", function() {
            // emetto un messaggio in console con il numero della cella cliccata
            console.log(this.innerText);

            // aggiungo la classe all'elemento cliccato
            this.classList.toggle("clicked");

        });

    }



});


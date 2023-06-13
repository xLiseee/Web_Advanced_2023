// de bezoeker krijgt op de webpagina een hoop spellen te zien met informatie in een unordered list, deze spellen zitten in objecten.
// als hij op de knop moeilijkheden klikt krijgt hij alle spelnamen en de moeilijkheden.
// als hij op de knop prijzen klikt krijgt hij alle spelnamen en de prijzen te zien in het vetgedrukt en rood

// zonder de spellen te ordenen op prijs van hoor naar laag en op moeilijkheid

/*
let spellen = [
    { naam: 'Fortnite', genre: 'Actie', prijs: '€ 19.99', moeilijkheid: 'Gemakkelijk' },
    { naam: 'Stardew Valley', genre: 'Avontuur', prijs: '€ 29.99', moeilijkheid: 'Gemiddeld' },
    { naam: 'Tetris', genre: 'Puzzel', prijs: '€ 9.99', moeilijkheid: 'Moeilijk' },
    { naam: 'Sea of Thieves', genre: 'Actie', prijs: '€ 39.99', moeilijkheid: 'Gemakkelijk' },
    { naam: 'Assassin\'s Creed', genre: 'Avontuur', prijs: '€ 49.99', moeilijkheid: 'Gemiddeld' },
    { naam: 'Snake', genre: 'Puzzel', prijs: '€ 59.99', moeilijkheid: 'Moeilijk' },
    { naam: 'Grand Theft Auto 5', genre: 'Actie', prijs: '€ 69.99', moeilijkheid: 'Gemakkelijk' },
    { naam: 'Goat Simulator', genre: 'Avontuur', prijs: '€ 79.99', moeilijkheid: 'Gemiddeld' },
];

let moeilijkhedenLijst;
let prijzenLijst;

function weergeefSpellen() {
    let spelLijst = document.createElement('ul');

    spellen.forEach(spel => {
        let spelItem = document.createElement('li');
        spelItem.innerText = `${spel.naam}, ${spel.genre}, ${spel.prijs}`;
        spelLijst.appendChild(spelItem);
    });

    document.body.appendChild(spelLijst);
}

function weergeefMoeilijkheden() {
    if (prijzenLijst) {
        prijzenLijst.remove();
        prijzenLijst = undefined;
    }

    if (!moeilijkhedenLijst) {
        moeilijkhedenLijst = document.createElement('ul');
        moeilijkhedenLijst.setAttribute('id', 'moeilijkhedenLijst');

        spellen.forEach(spel => {
            let moeilijkheidItem = document.createElement('li');
            let spelNaamElement = document.createElement('strong');
            spelNaamElement.innerText = spel.naam;
            spelNaamElement.style.color = "black";

            moeilijkheidItem.innerHTML = `${spelNaamElement.outerHTML}: <strong>${spel.moeilijkheid}</strong>`;

            if (spel.moeilijkheid === "Moeilijk") {
                moeilijkheidItem.querySelector('strong').style.fontWeight = 'bold';
                moeilijkheidItem.style.color = "red";
            } else if (spel.moeilijkheid === "Gemiddeld") {
                moeilijkheidItem.style.color = "orange";
            } else if (spel.moeilijkheid === "Gemakkelijk") {
                moeilijkheidItem.style.color = "green";
            }

            moeilijkhedenLijst.appendChild(moeilijkheidItem);
        });

        document.body.appendChild(moeilijkhedenLijst);
    }
}

function weergeefPrijzen() {
    if (moeilijkhedenLijst) {
        moeilijkhedenLijst.remove();
        moeilijkhedenLijst = undefined;
    }

    if (!prijzenLijst) {
        prijzenLijst = document.createElement('ul');
        prijzenLijst.setAttribute('id', 'prijzenLijst');

        spellen.forEach(spel => {
            let prijsItem = document.createElement('li');
            let strongElement = document.createElement('strong');
            strongElement.style.color = "red";
            strongElement.innerText = spel.prijs;
            prijsItem.innerHTML = `${spel.naam}: ${strongElement.outerHTML}`;
            prijzenLijst.appendChild(prijsItem);
        });

        document.body.appendChild(prijzenLijst);
    }
}

weergeefSpellen();

let moeilijkhedenKnop = document.createElement('button');
moeilijkhedenKnop.innerText = 'Moeilijkheden';
moeilijkhedenKnop.addEventListener('click', weergeefMoeilijkheden);
document.body.appendChild(moeilijkhedenKnop);

let prijzenKnop = document.createElement('button');
prijzenKnop.innerText = 'Prijzen';
prijzenKnop.addEventListener('click', weergeefPrijzen);
document.body.appendChild(prijzenKnop);


 */

// spellen gesorteerd op prijs van hoog naar laag

/*
let spellen = [
    { naam: 'Fortnite', genre: 'Actie', prijs: '€ 19.99', moeilijkheid: 'Gemakkelijk' },
    { naam: 'Stardew Valley', genre: 'Avontuur', prijs: '€ 29.99', moeilijkheid: 'Gemiddeld' },
    { naam: 'Tetris', genre: 'Puzzel', prijs: '€ 9.99', moeilijkheid: 'Moeilijk' },
    { naam: 'Sea of Thieves', genre: 'Actie', prijs: '€ 39.99', moeilijkheid: 'Gemakkelijk' },
    { naam: 'Assassin\'s Creed', genre: 'Avontuur', prijs: '€ 49.99', moeilijkheid: 'Gemiddeld' },
    { naam: 'Snake', genre: 'Puzzel', prijs: '€ 59.99', moeilijkheid: 'Moeilijk' },
    { naam: 'Grand Theft Auto 5', genre: 'Actie', prijs: '€ 69.99', moeilijkheid: 'Gemakkelijk' },
    { naam: 'Goat Simulator', genre: 'Avontuur', prijs: '€ 79.99', moeilijkheid: 'Gemiddeld' },
];

let moeilijkhedenLijst;
let prijzenLijst;

function weergeefSpellen() {
    let spelLijst = document.createElement('ul');

    spellen.forEach(spel => {
        let spelItem = document.createElement('li');
        spelItem.innerText = `${spel.naam}, ${spel.genre}, ${spel.prijs}`;
        spelLijst.appendChild(spelItem);
    });

    document.body.appendChild(spelLijst);
}

function weergeefMoeilijkheden() {
    if (prijzenLijst) {
        prijzenLijst.remove();
        prijzenLijst = undefined;
    }

    if (!moeilijkhedenLijst) {
        moeilijkhedenLijst = document.createElement('ul');
        moeilijkhedenLijst.setAttribute('id', 'moeilijkhedenLijst');

        spellen.forEach(spel => {
            let moeilijkheidItem = document.createElement('li');
            let spelNaamElement = document.createElement('strong');
            spelNaamElement.innerText = spel.naam;
            spelNaamElement.style.color = "black";

            moeilijkheidItem.innerHTML = `${spelNaamElement.outerHTML}: <strong>${spel.moeilijkheid}</strong>`;

            if (spel.moeilijkheid === "Moeilijk") {
                moeilijkheidItem.querySelector('strong').style.fontWeight = 'bold';
                moeilijkheidItem.style.color = "red";
            } else if (spel.moeilijkheid === "Gemiddeld") {
                moeilijkheidItem.style.color = "orange";
            } else if (spel.moeilijkheid === "Gemakkelijk") {
                moeilijkheidItem.style.color = "green";
            }

            moeilijkhedenLijst.appendChild(moeilijkheidItem);
        });

        document.body.appendChild(moeilijkhedenLijst);
    }
}

function weergeefPrijzen() {
    if (moeilijkhedenLijst) {
        moeilijkhedenLijst.remove();
        moeilijkhedenLijst = undefined;
    }

    if (!prijzenLijst) {
        prijzenLijst = document.createElement('ul');
        prijzenLijst.setAttribute('id', 'prijzenLijst');

        // Sorteer de spellen op prijs van hoog naar laag
        spellen.sort((a, b) => {
            const prijsA = parseFloat(a.prijs.replace(/[^0-9.-]+/g, ''));
            const prijsB = parseFloat(b.prijs.replace(/[^0-9.-]+/g, ''));
            return prijsB - prijsA;
        });

        spellen.forEach(spel => {
            let prijsItem = document.createElement('li');
            let strongElement = document.createElement('strong');
            strongElement.style.color = "red";
            strongElement.innerText = spel.prijs;
            prijsItem.innerHTML = `${spel.naam}: ${strongElement.outerHTML}`;
            prijzenLijst.appendChild(prijsItem);
        });

        document.body.appendChild(prijzenLijst);
    }
}

weergeefSpellen();

let moeilijkhedenKnop = document.createElement('button');
moeilijkhedenKnop.innerText = 'Moeilijkheden';
moeilijkhedenKnop.addEventListener('click', weergeefMoeilijkheden);
document.body.appendChild(moeilijkhedenKnop);

let prijzenKnop = document.createElement('button');
prijzenKnop.innerText = 'Prijzen';
prijzenKnop.addEventListener('click', weergeefPrijzen);
document.body.appendChild(prijzenKnop);

*/


// spellen gesorteerd op moeilijkheid van hoog naar laag

/* let spellen = [
    { naam: 'Fortnite', genre: 'Actie', prijs: '€ 19.99', moeilijkheid: 'Gemakkelijk' },
    { naam: 'Stardew Valley', genre: 'Avontuur', prijs: '€ 29.99', moeilijkheid: 'Gemiddeld' },
    { naam: 'Tetris', genre: 'Puzzel', prijs: '€ 9.99', moeilijkheid: 'Moeilijk' },
    { naam: 'Sea of Thieves', genre: 'Actie', prijs: '€ 39.99', moeilijkheid: 'Gemakkelijk' },
    { naam: 'Assassin\'s Creed', genre: 'Avontuur', prijs: '€ 49.99', moeilijkheid: 'Gemiddeld' },
    { naam: 'Snake', genre: 'Puzzel', prijs: '€ 59.99', moeilijkheid: 'Moeilijk' },
    { naam: 'Grand Theft Auto 5', genre: 'Actie', prijs: '€ 69.99', moeilijkheid: 'Gemakkelijk' },
    { naam: 'Goat Simulator', genre: 'Avontuur', prijs: '€ 79.99', moeilijkheid: 'Gemiddeld' },
];

let moeilijkhedenLijst;
let prijzenLijst;

function weergeefSpellen() {
    let spelLijst = document.createElement('ul');

    spellen.forEach(spel => {
        let spelItem = document.createElement('li');
        spelItem.innerText = `${spel.naam}, ${spel.genre}, ${spel.prijs}`;
        spelLijst.appendChild(spelItem);
    });

    document.body.appendChild(spelLijst);
}

function weergeefMoeilijkheden() {
    if (prijzenLijst) {
        prijzenLijst.remove();
        prijzenLijst = undefined;
    }

    if (!moeilijkhedenLijst) {
        moeilijkhedenLijst = document.createElement('ul');
        moeilijkhedenLijst.setAttribute('id', 'moeilijkhedenLijst');

        // Sorteer de spellen op moeilijkheid van moeilijk naar gemakkelijk
        spellen.sort((a, b) => {
            if (a.moeilijkheid === "Moeilijk" && b.moeilijkheid !== "Moeilijk") {
                return -1;
            } else if (a.moeilijkheid !== "Moeilijk" && b.moeilijkheid === "Moeilijk") {
                return 1;
            } else if (a.moeilijkheid === "Gemiddeld" && b.moeilijkheid === "Gemakkelijk") {
                return -1;
            } else if (a.moeilijkheid === "Gemakkelijk" && b.moeilijkheid === "Gemiddeld") {
                return 1;
            }
            return 0;
        });

        spellen.forEach(spel => {
            let moeilijkheidItem = document.createElement('li');
            let spelNaamElement = document.createElement('strong');
            spelNaamElement.innerText = spel.naam;
            spelNaamElement.style.color = "black";

            moeilijkheidItem.innerHTML = `${spelNaamElement.outerHTML}: <strong>${spel.moeilijkheid}</strong>`;

            if (spel.moeilijkheid === "Moeilijk") {
                moeilijkheidItem.querySelector('strong').style.fontWeight = 'bold';
                moeilijkheidItem.style.color = "red";
            } else if (spel.moeilijkheid === "Gemiddeld") {
                moeilijkheidItem.style.color = "orange";
            } else if (spel.moeilijkheid === "Gemakkelijk") {
                moeilijkheidItem.style.color = "green";
            }

            moeilijkhedenLijst.appendChild(moeilijkheidItem);
        });

        document.body.appendChild(moeilijkhedenLijst);
    }
}

function weergeefPrijzen() {
    if (moeilijkhedenLijst) {
        moeilijkhedenLijst.remove();
        moeilijkhedenLijst = undefined;
    }

    if (!prijzenLijst) {
        prijzenLijst = document.createElement('ul');
        prijzenLijst.setAttribute('id', 'prijzenLijst');

        spellen.forEach(spel => {
            let prijsItem = document.createElement('li');
            let strongElement = document.createElement('strong');
            strongElement.style.color = "red";
            strongElement.innerText = spel.prijs;
            prijsItem.innerHTML = `${spel.naam}: ${strongElement.outerHTML}`;
            prijzenLijst.appendChild(prijsItem);
        });

        document.body.appendChild(prijzenLijst);
    }
}

weergeefSpellen();

let moeilijkhedenKnop = document.createElement('button');
moeilijkhedenKnop.innerText = 'Moeilijkheden';
moeilijkhedenKnop.addEventListener('click', weergeefMoeilijkheden);
document.body.appendChild(moeilijkhedenKnop);

let prijzenKnop = document.createElement('button');
prijzenKnop.innerText = 'Prijzen';
prijzenKnop.addEventListener('click', weergeefPrijzen);
document.body.appendChild(prijzenKnop);

 */

// spellen gesorteerd op prijs van hoog naar laag en van moeilijk naar gemakkelijk
/*
let spellen = [
    { naam: 'Fortnite', genre: 'Actie', prijs: '€ 19.99', moeilijkheid: 'Gemakkelijk' },
    { naam: 'Stardew Valley', genre: 'Avontuur', prijs: '€ 29.99', moeilijkheid: 'Gemiddeld' },
    { naam: 'Tetris', genre: 'Puzzel', prijs: '€ 9.99', moeilijkheid: 'Moeilijk' },
    { naam: 'Sea of Thieves', genre: 'Actie', prijs: '€ 39.99', moeilijkheid: 'Gemakkelijk' },
    { naam: 'Assassin\'s Creed', genre: 'Avontuur', prijs: '€ 49.99', moeilijkheid: 'Gemiddeld' },
    { naam: 'Snake', genre: 'Puzzel', prijs: '€ 59.99', moeilijkheid: 'Moeilijk' },
    { naam: 'Grand Theft Auto 5', genre: 'Actie', prijs: '€ 69.99', moeilijkheid: 'Gemakkelijk' },
    { naam: 'Goat Simulator', genre: 'Avontuur', prijs: '€ 79.99', moeilijkheid: 'Gemiddeld' },
];

let moeilijkhedenLijst;
let prijzenLijst;

function weergeefSpellen() {
    let spelLijst = document.createElement('ul');

    spellen.forEach(spel => {
        let spelItem = document.createElement('li');
        spelItem.innerText = `${spel.naam}, ${spel.genre}, ${spel.prijs}`;
        spelLijst.appendChild(spelItem);
    });

    document.body.appendChild(spelLijst);
}

function sorteerOpMoeilijkheid() {
    if (prijzenLijst) {
        prijzenLijst.remove();
        prijzenLijst = undefined;
    }

    if (!moeilijkhedenLijst) {
        moeilijkhedenLijst = document.createElement('ul');
        moeilijkhedenLijst.setAttribute('id', 'moeilijkhedenLijst');

        // Sorteer de spellen op moeilijkheid van moeilijk naar gemakkelijk
        spellen.sort((a, b) => {
            if (a.moeilijkheid === "Moeilijk" && b.moeilijkheid !== "Moeilijk") {
                return -1;
            } else if (a.moeilijkheid !== "Moeilijk" && b.moeilijkheid === "Moeilijk") {
                return 1;
            } else if (a.moeilijkheid === "Gemiddeld" && b.moeilijkheid === "Gemakkelijk") {
                return -1;
            } else if (a.moeilijkheid === "Gemakkelijk" && b.moeilijkheid === "Gemiddeld") {
                return 1;
            } else {
                return 0;
            }
        });

        spellen.forEach(spel => {
            let moeilijkheidItem = document.createElement('li');
            let spelNaamElement = document.createElement('strong');
            spelNaamElement.innerText = spel.naam;
            spelNaamElement.style.color = "black";

            moeilijkheidItem.innerHTML = `${spelNaamElement.outerHTML}: <strong>${spel.moeilijkheid}</strong>`;

            if (spel.moeilijkheid === "Moeilijk") {
                moeilijkheidItem.querySelector('strong').style.fontWeight = 'bold';
                moeilijkheidItem.style.color = "red";
            } else if (spel.moeilijkheid === "Gemiddeld") {
                moeilijkheidItem.style.color = "orange";
            } else if (spel.moeilijkheid === "Gemakkelijk") {
                moeilijkheidItem.style.color = "green";
            }

            moeilijkhedenLijst.appendChild(moeilijkheidItem);
        });

        document.body.appendChild(moeilijkhedenLijst);
    }
}

function sorteerOpPrijs() {
    if (moeilijkhedenLijst) {
        moeilijkhedenLijst.remove();
        moeilijkhedenLijst = undefined;
    }

    if (!prijzenLijst) {
        prijzenLijst = document.createElement('ul');
        prijzenLijst.setAttribute('id', 'prijzenLijst');

        // Sorteer de spellen op prijs van hoog naar laag
        spellen.sort((a, b) => parseFloat(b.prijs.split('€ ')[1]) - parseFloat(a.prijs.split('€ ')[1]));

        spellen.forEach(spel => {
            let prijsItem = document.createElement('li');
            let strongElement = document.createElement('strong');
            strongElement.style.color = "red";
            strongElement.innerText = spel.prijs;
            prijsItem.innerHTML = `${spel.naam}: ${strongElement.outerHTML}`;
            prijzenLijst.appendChild(prijsItem);
        });

        document.body.appendChild(prijzenLijst);
    }
}

weergeefSpellen();

let moeilijkhedenKnop = document.createElement('button');
moeilijkhedenKnop.innerText = 'Moeilijkheden';
moeilijkhedenKnop.addEventListener('click', sorteerOpMoeilijkheid);
document.body.appendChild(moeilijkhedenKnop);

let prijzenKnop = document.createElement('button');
prijzenKnop.innerText = 'Prijzen';
prijzenKnop.addEventListener('click', sorteerOpPrijs);
document.body.appendChild(prijzenKnop);

 */


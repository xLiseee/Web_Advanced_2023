// de bezoeker geeft een random zin in in de input. de zin moet meer dan 4 woorden bevatten anders krijgt hij
// een melding te zien staan dat de zin te weinig woorden heeft.
// als de zin meer dan 4 woorden bevat word de zin getoont in een alert venster,
// achter elke woord komt het woord 'BEEP' te staan.


let userInput = prompt("Voer een zin in:");

if (userInput.split(" ").length <= 4) {
    alert("De zin heeft te weinig woorden.");
    location.reload()
} else {
    let modifiedSentence = userInput.replace(/\b(\w+)\b/g, "$1 BEEP");
    document.getElementById("uitkomst").innerHTML = modifiedSentence;
}



// de bezoeker geeft een random zin in in de input. de zin moet meer dan 4 woorden bevatten anders krijgt hij
// een melding te zien staan dat de zin te weinig woorden heeft.
// als de zin meer dan 4 woorden bevat word de zin getoont in een alert venster de medeklinkers in hoofdletter
// en de gewone klinkers in kleine letters.

let userInput = prompt("Voer een zin in:");

if (userInput.split(" ").length <= 4) {
    alert("De zin heeft te weinig woorden.");
    location.reload()
} else {
    let nieuwezin = userInput.replace(/[aeiou]/gi, v => v.toUpperCase()).replace(/[bcdfghjklmnpqrstvwxyz]/gi, c => c.toLowerCase());
    alert(nieuwezin);
}


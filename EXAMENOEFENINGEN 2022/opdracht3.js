// maak een minirekenmachiene waar de bezoeker 2 random getallen ingeeft tussen 0 en 50 in een prompt venster.
// als 1 van de getallen niet tussen 0 en 50 komt te staan krijgt hij een alert venster te zien dat het nummer niet tussen de 0 en 50 zit.
// als beide getallen tussen 0 en 50 zitten word het resultaat getoont in een alert venster.
//
// de volgende resultaten moeten komen te staan in het alert venster:
//
// uitkomst som
// uitkomst min
// uitkomst vermenigvuldiging
// uitkomst deling
// uitkomst restwaarde

let num1 = prompt("Voer het eerste getal in (tussen 0 en 50):");
let num2 = prompt("Voer het tweede getal in (tussen 0 en 50):");

if (num1 < 0 || num1 > 50 || num2 < 0 || num2 > 50) {
    alert("Een of meerdere van de ingevoerde getallen is niet tussen 0 en 50.");
    location.reload()
} else {
    let som = parseFloat(num1) + parseFloat(num2);
    let verschil = parseFloat(num1) - parseFloat(num2);
    let vermenigvuldiging = parseFloat(num1) * parseFloat(num2);
    let deling = parseFloat(num1) / parseFloat(num2);
    let restwaarde = parseFloat(num1) % parseFloat(num2);

    let resultMessage = "Uitkomst som: " + som + "\n" +
        "Uitkomst verschil: " + verschil + "\n" +
        "Uitkomst vermenigvuldiging: " + vermenigvuldiging + "\n" +
        "Uitkomst deling: " + deling + "\n" +
        "Uitkomst restwaarde: " + restwaarde;

    alert(resultMessage);
}



function berekenResultaten() {
    // Get input values
    let getal1 = parseFloat(document.getElementById('getal1').value);
    let getal2 = parseFloat(document.getElementById('getal2').value);

    // Perform calculations
    let vermenigvuldiging = getal1 * getal2;
    let optelling = getal1 + getal2;
    let aftrekking = getal1 - getal2;
    let deling = getal1 / getal2;

    // Display results
    document.getElementById('vermenigvuldiging').textContent = "Vermenigvuldiging: " + vermenigvuldiging;
    document.getElementById('optelling').textContent = "Optelling: " + optelling;
    document.getElementById('aftrekking').textContent = "Aftrekking: " + aftrekking;
    document.getElementById('deling').textContent = "Deling: " + deling;
}

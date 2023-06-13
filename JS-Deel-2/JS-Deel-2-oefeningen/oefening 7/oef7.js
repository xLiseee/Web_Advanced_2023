function vermenigvuldigen() {
    // Get input values
    let getal1 = parseInt(document.getElementById('getal1').value);
    let getal2 = parseInt(document.getElementById('getal2').value);

    // Perform multiplication
    let uitkomst = getal1 * getal2;

    // Display result
    document.getElementById('uitkomst').textContent = "Uitkomst: " + uitkomst;
}

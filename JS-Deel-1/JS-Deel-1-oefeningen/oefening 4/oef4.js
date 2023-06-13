let naam = prompt("Wat is uw naam?");
document.getElementById("bezoekerNaam").innerText = naam;

// Bereken de resterende dagen tot het einde van het academiejaar (31 december)
let huidigeDatum = new Date();
let eindeAcademieJaar = new Date(huidigeDatum.getFullYear(), 11, 31);
let verschilInDagen = Math.ceil((eindeAcademieJaar - huidigeDatum) / (1000 * 60 * 60 * 24));
document.getElementById("aftelling").innerText = verschilInDagen;
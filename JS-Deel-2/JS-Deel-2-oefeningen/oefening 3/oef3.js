let zin = "Ik wil een koekje";

console.log("Karakter op positie 0:", zin[0]);
console.log("Karakter op positie 3:", zin[3]);
console.log("Laatste positie van 'k':", zin.lastIndexOf("k"));
console.log("Laatste positie van 'e':", zin.lastIndexOf("e"));
console.log("Aantal karakters:", zin.length);

document.getElementById("koekje").innerHTML = zin;

// Découverte et utilisation de Node.js

let nmbr = 0;
let nmbr2 = -32;
let nmbr3 = 12;

function Absolu(nmbr)
{
    if(nmbr < 0) nmbr = -nmbr;
    return nmbr;
}
// Version optimisé :

function Absolu_opti(nmbr)
{
    return nmbr > 0 ? nmbr : -nmbr;            
}

console.log("Voici sa valeur absolu : ", Absolu(nmbr));
console.log("Voici sa valeur absolu : ", Absolu(nmbr2));
console.log("Voici sa valeur absolu : ", Absolu(nmbr3));
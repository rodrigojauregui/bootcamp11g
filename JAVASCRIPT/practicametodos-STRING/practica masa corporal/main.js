/*
//MASA CORPORAL
//NECESITO PESO Y ALTURA

let peso = prompt("escribe tu peso");
let altura = Math.pow(prompt("escribe tu altura en m"),2);
let indice = (peso/altura).toFixed(2)
console.log (peso, altura, indice);

switch (true){
    case (indice <18.5):
        alert("tu peso es inferior al normal");
    break;
    case (indice >= 18.5 && indice <=24.9):
        alert ("tu peso es normal");
    break;
    case (indice >= 25.0 && indice <=29.9):
        alert ("tu peso es superior al normal");
    break;
    case (indice >= 30.0):
        alert ("tienes obesidad");
    break;
    default:
        alert("no obtuvimos datos válidos");
}
*/













/*CALCULAR PESO DE UN CUBO DE CUALQUIER MATERIAL

let acero = .7850;
let cobre = .8940;
let oro = .19300;
let plata = .10490;
let diamante = .3515;

let sustancia = prompt("dame el material")
let lado = Math.pow(prompt("dame la longitud del lado en cm"),3)

switch(true){
    case (sustancia === "acero"):
        alert (`el peso de tu cubo de acero es ${((lado*acero)/100).toFixed(2)} kg.`);
    break;
    case (sustancia === "cobre"):
        alert (`el peso de tu cubo de cobre es ${((lado*cobre)/100).toFixed(2)} kg.`);
    break;
    case (sustancia === "oro"):
        alert (`el peso de tu cubo de oro es ${((lado*oro)/100).toFixed(2)} kg.`);
    break;
    case (sustancia === "plata"):
        alert (`el peso de tu cubo de plata es ${((lado*plata)/100).toFixed(2)} kg.`);
    break;
    case (sustancia === "diamante"):
        alert (`el peso de tu cubo de diamante es ${((lado*diamante)/100).toFixed(2)} kg.`);
    break;
    default:
        alert ("no hay datos sobre la densidad de dicho material");
}
*/

function addTax (price){
    const IVA = 1.16
    let result = price * IVA
    console.log (result)
}
addTax( 5 )
addTax( 6 )
addTax( 10 )


let as = "a";
let as = "b";
console.log (as)









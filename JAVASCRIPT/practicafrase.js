

var phrase = "La mejor forma de predecir el futuro es creándolo";
//numero de palabras 
let numOfWords = (phrase.split(" ")).length;
//numero de veces que a,á,A y Á aparecen
let numOfAs = phrase.match(/[AaÁá]/g).length;
//nuevo string con letras nones
let oddPhrase = phrase.replace(/ /g,"");
var newOddPhrase = "";
for (var i = 1 ; i < oddPhrase.length ; i+=2){
    newOddPhrase += oddPhrase.charAt(i);
}
//nuevo string con letras pares
var newEvenPhrase = "";
for (var i = 0 ; i < oddPhrase.length ; i+=2){
    newEvenPhrase += oddPhrase.charAt(i);
}
//snake_case
let snakePhrase = phrase.replace(/ /g,"_");
//kebab-case
let kebabPhrase = phrase.replace(/ /g,"-");
// vocales en mayusculas
var upperCaseVowls = phrase.replace(/a|e|i|o|u|á/gi, 
function (x) {
    return x.toUpperCase();
  });
//1eros 10 caracteres
let firstTen = phrase.slice(0,10);
// last ten
let lastTen = phrase.substr(phrase.length -10);
//console.log's
console.log(numOfWords);
console.log(numOfAs);
console.log(newOddPhrase);
console.log(newEvenPhrase);
console.log(snakePhrase);
console.log(kebabPhrase);
console.log(upperCaseVowls);
console.log(firstTen);
console.log(lastTen);
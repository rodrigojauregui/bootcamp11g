// 1. Dado un string de dos palabras realizar una función que devuelva la palabra más larga
/*
let firstEx = "Programación Javascript ";

const longestWord = (string) => {
    const splitted= string.split (" ")
    const sortedArray = splitted.sort(
        (splitA, splitB) => {
        return splitB.length - splitA.length;
        }
    );
    return    sortedArray [0] + " y tiene " + sortedArray [0].length +" letras."
}

console.log(longestWord(firstEx));
*/



// 2. Crear un programa que permita detectar si una frase finaliza con punto. Dicho programa debe estar encapsulada en una función y recibir el o los parametros necesarios.
/*
let frase1 = "Hola soy una desarrollador FullStack.";
let frase2 = "Hola soy una desarrollador FullStack";

 const secondEx = (string) =>{
     let a = string.charAt(string.length-1);
     if (a === "."){
         return "Finalizó en punto"
     } else {
         return "No finalizó en punto D:"
     }
 }
 console.log( secondEx(frase2))
 */

 // 3. Crear un programa que permita al usuario retornar el numero de coincidencias de una palabra en una frase que el mismo usuario ingrese.
/*
const phrase = "Hola me llamo Fernanda Palacios. Hola Otra vez, hola a todos."

const numberOfWords = (frase)  => {
    let a = frase.match(/me/gi);
    if (a !== null){
        return a.length
    } else {
        return "no hay coincidencias"

    }
    
}
console.log(numberOfWords(phrase))
*/
// 4. Crear un programa que permita al usuario extraer una subacadena de una frase dada.
/*
let phrase = "Soy un desarrollador FullStack"
let word = "un desarrollador"

const searchWord = (frase,palabra)  => {
    let a = frase.includes(palabra)
    if ( a ){
        return `la frase buscada "${palabra}" si se encuentra en la frase`
    } else {
        return `la frase buscada "${palabra}" no se encuentra en la frase`
    }
    
}
console.log(searchWord(phrase,word))
*/

// 5. crear un programa que permita comparar dos palabaras das por el usuario y determinar si son iguales.

/*
let word1 = "hola me llamo rodrigo";
let word2 = "hola me llamo rodrigo";

const compareWords = () =>{
    let a = word1.localeCompare(word2)
    if (a === 0){
        return "sí son iguales"
    } else {
        return "no son iguales"
    }
}
console.log(compareWords())
*/

// 6. Realizar un programa que permita a una cadena de texto convertirlo a Mayusculas.

/*
let input = "Hola soy desarrollador fullstack";
const inputToUpperCase = () => input.toUpperCase();
console.log(inputToUpperCase())
*/

// 7. Crear un programa que permita a una cadena de texto mostrar el sogno '-' entre cada caracter
/*
let str = "Hola soy un desarrollador fullstack";
const toDifCase = () => str.replace(/ /g, "-");
console.log(toDifCase());
*/

// 8. Crear un programa que devuelva la cantidad de vocales que tenga una frase dada por el usuario.

/*
let phrase = "Hola me llamo Rodrigo Jáuregui y soy un desarrollador fullstack."
const numberOfVowels = ()  => {
    let a = phrase.match(/[aeiouáéíóú]/gi);
    if (a !== null){
        return `hay ${a.length} vocales en la frase`
    } else {
        return "no hay coincidencias"
    }
}
console.log(numberOfVowels(phrase))
*/

//9. Crear un programa que permita devolver una cadena de texto de forma inversa a la que el usuario lo ingresa.
/*
let palabra= "todologo"
let palabra2 = "paranguacutirimicuaro"
const b = (a) => a.split("").reverse().join("")
    
console.log(b(palabra2)
)
*/

// 11. Sabiendo que una cadena de texto contine parentesis. Crear un programa que devuelva la cadena que se encuentra entre los parentesis.




































 /*
let namesArray = [
    "Jaime",
    "Beto",
    "Mariana"
]

const printList = () => {
    let list = document.createElement("ol");

    namesArray.forEach ( name =>{
        let listItem = document.createElement("li")
        let itemText = document.createTextNode(name)

        listItem.appendChild(itemText)
        list.appendChild(listItem)
    })
    document.body.appendChild(list)
}

printList()
*/

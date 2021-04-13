
/*crear una funcion que pida al usuario el numero de koders a registrar
pedir el nombre del koder y apellido del koder
imprimir el nombre completo del koder

function kodemia (){
    let usersNumber = parseInt(prompt("¿cuántos koders quieres registrar?")) 
    for (var i=0 ; i < usersNumber ; i++){
        let name = prompt("escribe el nombre")
        let surName = prompt("escribe el apellido")
        console.log(name + " " + surName)
    }
}
kodemia()
*/

var kodersList = [
    [ 
        "Fernanda",
        "Palacios Vera"
    ],
    [
        "Jorge",
        "Ochoa"
    ],
    [
        "Naomi", 
        "Puertos"
    ],
    [
        "Rurick",
        "Maqueo Poissot"
    ]
]
//crear un nuevo array con los nombres completos de koderslist

/*

const createNew = () =>{ 
    var newArray = []
    for (let i = 0; i<kodersList.length; i++){
        newArray.push (kodersList[i].join( " "))
    }
    return newArray
}
let giveMeNames = createNew()


const searchfor = (name) => {

    for ( i = 0; i<giveMeNames.length; i++){
        let firstNames = giveMeNames[i].split(" ")[0]
        console.log(firstNames)
        firstNames === name ? console.log("si existe") : console.log("no existe")
    }

   
} 

searchfor("Naomi")
*/

var productsList = [
    {
        name:"producto 1",
        price:12.45,
        category:"Miscellaneous"
    },
    {
        name:"producto 2",
        price:25.13,
        category:"Vegetables"
    },
    {
        name:"producto 3",
        price:45.00,
        category:"Cloths"
    },
    {
        name:"producto 4",
        price:12500.00,
        category:"Computers"
    },
    {
        name:"producto 5",
        price:15500.00,
        category:"Computers"
    },
    {
        name:"producto 6",
        price:8729.00,
        category:"Computers"
    },{
        name:"producto 7",
        price:150.00,
        category:"Cloths"
    },{
        name:"producto 8",
        price:100.00,
        category:"Miscellaneous"
    },{
        name:"producto 9",
        price:50.00,
        category:"Vegetables"
    },{
        name:"producto 10",
        price:200.00,
        category:"Cloths"
    }
]

//  Quiero conocer la cantidad de productos en el array.
const productsQuantity = () => productsList.length
console.log(productsQuantity())

//  Quiero conocer el costo total de todos los productos del array.

const productsCost = () => productsList.reduce((accum, current) => accum + current.price, 0)
console.log(productsCost())

//  Quiero conocer la cantidad de productos de cada categoría:
        //(Vegetables, Cloths, Miscellaneous, Computers)
const productsBycategory = () => {
        const productsFilter = (category) => productsList.filter(item => item.category === category)
        
        let vegetables = productsFilter("Vegetables").length;
        let cloths = productsFilter("Cloths").length;
        let miscellaneous = productsFilter("Miscellaneous").length;
        let computers = productsFilter("Computers").length;

        const productsStrings = ( functions, category) => console.log(`hay ${functions} productos en la categoría ${category}`)
        productsStrings(vegetables, "Vegetables")
        productsStrings(cloths, "cloths")
        productsStrings(miscellaneous, "miscellaneous")
        productsStrings(computers, "computers")
    }
    productsBycategory()

//  Quiero un nuevo array para cada categoría:

const newArray = () => {
    const productsFilter = (category) => productsList.filter(item => item.category === category)
    let vegetables = console.log(productsFilter("Vegetables"));
    let cloths = console.log(productsFilter("Cloths"));
    let miscellaneous = console.log(productsFilter("Miscellaneous"));
    let computers = console.log(productsFilter("Computers"));
    }
    newArray()

//  Quiero un nuevo array de strings que tenga lo siguiente:
    /*[
        "El { productName } tiene un costo de { price }"
    ]*/

const productString = ( )=> productsList.map (item => console.log(`El ${ item.name } tiene un costo de ${ item.price }`))

productString()
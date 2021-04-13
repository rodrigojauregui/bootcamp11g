// 1. Del siguiente arreglo llamada 'arrayNames': obtener de cada nombre la siguiente salida:
/*Ruben Flores R.B.
Andre Vazquez A.V.
Fernanda Palacios F.P.
George Camarillo G.C.
Ale Paez A.P.
*/

const arrayNames = [
    ["Ruben", "Flores"],
    ["Andre", "Vazquez"],
    ["Fernanda", "Palacios"],
    ["Goerge", "Camarillo"],
    ["Ale", "Paez"],
    ["Shari", "Andrade"],
    ["Erick", "Trujillo"],
    ["Arce", "Gutiérrez"],
    ["Juan", "Hernandez"]
]

const newArray = () => arrayNames.map(item => (item[0] + " " + item [1] + " " + item[0].charAt(0) +"." + item[1].charAt(0) +"." ))

console.log(newArray().join(", "))

// 2. Del siguiente arreglo:

const arrayKoders = [
    [
        ["name", "Ruben"],
        ["lastName", "Alvarez"],
        ["generation", 1],
        ["bootcamp", "python"],
        ["score", 90]
    ],
	[
        ["name", "Andre"],
        ["lastName", "Alvarez"],
        ["generation", 1],
        ["bootcamp", "python"],
        ["score", 90]
    ],
    [
        ["name", "Ale"],
        ["lastName", "Paez"],
        ["generation", 1],
        ["bootcamp", "python"],
        ["score", 98]
    ],
    [
        ["name", "Juan Pi"],
        ["lastName", "López"],
        ["generation", 10],
        ["bootcamp", "JavaScript"],
        ["score", 95]
    ],
    [
        ["name", "Cintia"],
        ["lastName", "Gomez"],
        ["generation", 10],
        ["bootcamp", "JavaScript"],
        ["score", 85]
    ],
    [
        ["name", "Shari"],
        ["lastName", "Andrade"],
        ["generation", 10],
        ["bootcamp", "JavaScript"],
        ["score", 90]
    ],
    [
        ["name", "Arce"],
        ["lastName", "Gutierrez"],
        ["generation", 10],
        ["bootcamp", "JavaScript"],
        ["score", 90]
    ],
    [
        ["name", "JC"],
        ["lastName", "Hernandez"],
        ["generation", 10],
        ["bootcamp", "JavaScript"],
        ["score", 90]
    ],
    [
        ["name", "Erick"],
        ["lastName", "Trujillo"],
        ["generation", 10],
        ["bootcamp", "JavaScript"],
        ["score", 90]
        
    ]
]
function Koder (name, lastName, generation, bootcamp, score ){
    this.name = name;
    this.lastName = lastName;
    this.generation = generation;
    this.bootcamp = bootcamp;
    
    this.score = score;
    
}

const newArrayKoders = () => arrayKoders.map(item => {
       let objectKoder = item.reduce((array, koder) => {
            let key = koder [0]
            let value = koder [1]
            array[key] = value
            return array
        }, {})
        return new Koder (objectKoder.name, objectKoder.lastName, objectKoder.generation, objectKoder.bootcamp, objectKoder.score )
    })

console.log(newArrayKoders())

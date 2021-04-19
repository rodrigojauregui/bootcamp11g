

var mentorsArray = [
    {
        name:"Israel Salinas Martinez",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:8
            },
            {
                signature:"ReactJS",
                score:8
            }
        ]
    },
    {
        name:"David Cermeño Moranchel",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:7
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    },
    {
        name:"Charles Silva",
        scores:[
            {
                signature:"HTML",
                score:9
            },
            {
                signature:"CSS",
                score:9
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:9
            }
        ]
    },
    {
        name:"Michael Villalba Sotelo",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:9
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    }
]

let tableHeadArray = [
    "#",
    "NAME",
    "HTML",
    "CSS",
    "JS",
    "REACT",
    "AVERAGE",
    " "
]


const deleteMentor = (event) => {
    let mentorIndex = event.target.dataset.mentorIndex
    mentorsArray.splice(mentorIndex,1)
    printTable()
}

const printTable = () => {


    let table = document.getElementById("table-mentors")
    table.classList.add("table",  "table-striped")

    while(table.lastElementChild) {
        table.removeChild(table.lastElementChild)
    }

    

    let tableHead = document.createElement("thead")
    table.appendChild(tableHead)
    tableHead.classList.add("thead-dark")

    let tableBody = document.createElement("tbody")
    table.appendChild(tableBody)

    let tableFoot = document.createElement("tfoot")
    table.appendChild(tableFoot)

    const tableHeadFunction = () => {

        let tableHeadRow = document.createElement("tr")
        tableHead.appendChild(tableHeadRow)

        tableHeadArray.forEach( item => {

            let tableHeadTh = document.createElement("th")
            tableHeadRow.appendChild(tableHeadTh)

            let tableHeadThText = document.createTextNode(item)
            tableHeadTh.appendChild(tableHeadThText)
        })    
    }
    tableHeadFunction()

    let globalAverage = 0;

    const tableBodyFunction = () => {
       
        mentorsArray.forEach( (item,index) => {

            //se crea el row
            let tableBodyRow = document.createElement("tr")
            tableBody.appendChild(tableBodyRow)

            //se crea el row #
            let tableBodyRowNumberTd = document.createElement("td")
            tableBodyRow.appendChild(tableBodyRowNumberTd)

            let tableBodyRowNumberTdText = document.createTextNode(index+1)
            tableBodyRowNumberTd.appendChild(tableBodyRowNumberTdText)

            // se cre el name td 
            let tableBodyRowNameTd = document.createElement("td")
            tableBodyRow.appendChild(tableBodyRowNameTd)

            let tableBodyRowNameTdText = document.createTextNode(item.name)
            tableBodyRowNameTd.appendChild(tableBodyRowNameTdText)

            //se crean los scores td
            item.scores.forEach( scores => {

                let tableBodyRowScoresTd = document.createElement("td")
                tableBodyRow.appendChild(tableBodyRowScoresTd)

                let tableBodyRowScoresTdText = document.createTextNode(scores.score)
                tableBodyRowScoresTd.appendChild(tableBodyRowScoresTdText)

                let buttonLow = document.getElementById("low-score")
                buttonLow.addEventListener("click", () => {
                    if(scores.score >8){
                        tableBodyRowScoresTd.classList.add("bg-dark")
                    } else {
                        tableBodyRowScoresTd.classList.add("bg-danger")
                    }
                })
            })

            //se genera el reduce
            let tableBodyRowAverage= item.scores.reduce((accum,current) => accum + current.score/item.scores.length,0)
            // se crean los average td
            let tableBodyRowAverageTd = document.createElement("td")
            tableBodyRow.appendChild(tableBodyRowAverageTd)
            let tableBodyRowAverageTdText = document.createTextNode(tableBodyRowAverage)
            tableBodyRowAverageTd.appendChild(tableBodyRowAverageTdText)

            
            //se crea el boton 
            let buttonTd = document.createElement("td")
            tableBodyRow.appendChild(buttonTd)
            let deleteButton= document.createElement("button")
            deleteButton.className = "btn btn-danger "
            deleteButton.dataset.mentorIndex = index

            deleteButton.addEventListener("click", deleteMentor)

            let deleteButtonText = document.createTextNode("eliminar")
            deleteButton.appendChild(deleteButtonText)
            buttonTd.appendChild(deleteButton)

            globalAverage +=  tableBodyRowAverage/mentorsArray.length

        })
    }
    tableBodyFunction()

    const footerFunction = () => {

        let globalAverageFoot = document.createElement("tfoot")
        table.appendChild(globalAverageFoot)
        let globalAverageFootRow = document.createElement("tr")
        globalAverageFoot.appendChild(globalAverageFootRow)
        let globalAverageFootTd = document.createElement("td")
        globalAverageFootRow.appendChild(globalAverageFootTd)
        let globalAverageFootText = document.createTextNode(globalAverage.toFixed(2))
        globalAverageFootTd.appendChild(globalAverageFootText)
    }
    footerFunction()

}
printTable()












const getKoderName = () => {
    let newObject = {}
    let koderName = document.getElementById("koder-name").value
    let scores = []
    let a = {score: document.getElementById("koder-html").value}
    let b = {score: document.getElementById("koder-css").value}
    let c = {score: document.getElementById("koder-js").value}
    let d = {score: document.getElementById("koder-reactjs").value}

    newObject.name = koderName
    newObject.scores = scores
    newObject.scores.push(a)
    newObject.scores.push(b)
    newObject.scores.push(c)
    newObject.scores.push(d)

    console.log(newObject)

    mentorsArray.push(newObject)

    printTable()

    document.getElementById("koder-name").value = " "
    document.getElementById("koder-html").value = " "
    document.getElementById("koder-css").value = " "
    document.getElementById("koder-js").value= " "
    document.getElementById("koder-reactjs").value = " "

}

document.getElementById("save-koder").addEventListener("click", getKoderName )



    

















//¿como se extrae lo que se escribe en el input?

//existe el atributo value, puedes acceder a el a traves de .value
// *** event *** es un objeto que contiene todas las caracteristicas del evento que esta sucediendo
// *** target *** es una propiedad que hace referencia al elemento que esta recibiendo el evento 


/*
document.getElementById("my-input").addEventListener("keyup", (event) => {
    //se asigna como parametro event, el cual guarda todas las caracterisiticas del evento (keyup) que sucedio
    
    let value = event.target.value

    //se identifica el elemento por el id y se accede a su texto con la propiedad "innerText", lo que se asigna = a value 

    document.getElementById("my-heading").innerText = value

})
 
let buttons = document.querySelectorAll(".test-btn")
console.log(buttons)

buttons.forEach(boton => {
    boton.addEventListener("click", event => {
        console.log(event.target.innerText)
        let customKey = event.target.dataset.customKey
        console.log(customKey)
    })
})


//los atributos personalizados en html los podemos crear a traves de data-custom-key = "blablabla"
//los atriubutos personalizados que cree con "data" se guardan en una propiedad que se llama "dataset" 

/*
let buttonSave = document.getElementById("button-save")


document.getElementById("form-list").addEventListener("keyup", (event) => {
    
    let value = event.target.value

    buttonSave.addEventListener( "click", () => {
        let newUl = document.getElementById("new-ul")
        let newList = document.createElement("li")
        newUl.appendChild(newList)
        newList.innerText = value

    } )
})
*/


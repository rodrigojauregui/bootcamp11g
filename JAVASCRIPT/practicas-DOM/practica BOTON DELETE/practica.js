
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
// se crea el table 
let dataTable = document.createElement("table")
dataTable.className="table table-striped "
document.body.appendChild(dataTable)

// se crea el table head
let tableHeader = document.createElement("thead")
dataTable.appendChild(tableHeader)

// se crea el table body
let tableBody = document.createElement("tbody")
dataTable.appendChild(tableBody)

// funcion para eliminar mentores



const tableFunction = () => {

    const deleteMentor = (event) => {
        let mentorIndex = event.target.dataset.mentorIndex
        mentorsArray.splice(mentorIndex,1)
        console.log(mentorsArray)

        tableBodyFunction()
        
    }
          
            
            //se crea el thead
            const tableHeaderFunction = () => {
                
                let tableHeaderRow = document.createElement("tr")
                tableHeader.appendChild(tableHeaderRow)
                let headerName = [ "MENTOR", "HTML", "CSS", "JS", "REACTJS", "average", "boton"]

                headerName.forEach(item => {
                    let rowHeader = document.createElement("th");
                    tableHeaderRow.appendChild(rowHeader)
                    let rowHeaderName = document.createTextNode(item)
                    rowHeader.appendChild(rowHeaderName)
                })
            }

            const tableBodyFunction = () => {
                

                mentorsArray.forEach((item, index) => {


                    let tableBodyRow = document.createElement("tr")
                    tableBody.appendChild(tableBodyRow)

                    while(tableBodyRow.lastElementChild) {
                        tableBodyRow.removeChild(tableBodyRow.lastElementChild)
                    }
                    

                    // nombres de los mentores
                    let nameRow = document.createElement("td")
                    let nameRowText = document.createTextNode(item.name)
                    nameRow.appendChild(nameRowText)
                    tableBodyRow.appendChild(nameRow)

                    //scores de los mentores
                    item.scores.forEach(item => {
                        let tableBodyRowScore = document.createElement("td")
                        tableBodyRow.appendChild(tableBodyRowScore)
                        let tableBodyRowScoreText = document.createTextNode(item.score)
                        tableBodyRowScore.appendChild(tableBodyRowScoreText)
                        item.score >= 9 ? tableBodyRowScore.classList.add("bg-warning") : tableBodyRowScore.classList.add("bg-success")
                    })
                    
                    //se toma el average
            
                    let mentorsAverage = item.scores.reduce((accum,current) => accum + current.score,0)/item.scores.length

                    let averageRow = document.createElement("td")
                    tableBodyRow.appendChild(averageRow)
                    let averageRowText = document.createTextNode(mentorsAverage)
                    averageRow.appendChild(averageRowText)
                    
                    //se crea el boton
                    let buttonTd = document.createElement("td")
                    tableBodyRow.appendChild(buttonTd)
                    let deleteButton= document.createElement("button")
                    deleteButton.className = "btn btn-danger btn-delete"
                    deleteButton.dataset.mentorIndex = index

                    deleteButton.addEventListener("click", deleteMentor)
                    let deleteButtonText = document.createTextNode("eliminar")
                    deleteButton.appendChild(deleteButtonText)
                    buttonTd.appendChild(deleteButton)
                    
                })



            }
        tableHeaderFunction()
        tableBodyFunction()
}
tableFunction()

let bordersTable = document.querySelectorAll("#koders-list li")


bordersTable.forEach( item => {
    item.classList.add("list-group-item")
    let itemText = item.innerText
    itemText.length > 4 ? item.classList.add("bg-primary") : item.classList.add("bg-warning")

})





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
*/
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


let koderList = []



const getKoderName = () => {


    function KoderListFunction (name, html, css, js, reactjs){
        this.name = name;
        this.html = html;
        this.css = css;
        this.js = js;
        this.reactjs = reactjs;
    }

    let koderName = document.getElementById("koder-name").value
    let koderHtml = document.getElementById("koder-html").value
    let koderCss = document.getElementById("koder-css").value
    let koderJs = document.getElementById("koder-js").value
    let koderReactJs = document.getElementById("koder-reactjs").value

    const newKoderForm = new KoderListFunction (koderName, koderHtml, koderCss, koderJs, koderReactJs)

    koderList.push(newKoderForm)

    

    while(koderList.lastElementChild) {
        koderList.removeChild(koderList.lastElementChild)
    }

    printKoders()

    document.getElementById("koder-name").value = " "
    document.getElementById("koder-name").value = " "
    document.getElementById("koder-html").value = " "
    document.getElementById("koder-css").value = " "
    document.getElementById("koder-js").value= " "
    document.getElementById("koder-reactjs").value = " "

}

document.getElementById("save-koder").addEventListener("click", getKoderName )

const printKoders = () => {

    let newKoderRow= document.createElement("tr")
    tableBody.appendChild(newKoderRow)

    koderList.forEach( koder => {

        let koderNameTd = document.createElement("td")
        newKoderRow.appendChild(koderNameTd)
        koderNameTd.innerText = koder.name

        let koderHtmlTd = document.createElement("td")
        newKoderRow.appendChild(koderHtmlTd)
        koderHtmlTd.innerText = koder.html

        let koderCssTd = document.createElement("td")
        newKoderRow.appendChild(koderCssTd)
        koderCssTd.innerText = koder.css

        let koderJsTd = document.createElement("td")
        newKoderRow.appendChild(koderJsTd)
        koderJsTd.innerText = koder.js

        let koderReactjsTd = document.createElement("td")
        newKoderRow.appendChild(koderReactjsTd)
        koderReactjsTd.innerText = koder.reactjs

        let newKoderAverage = document.createElement("td")
        newKoderRow.appendChild(newKoderAverage)


        console.log(koder.html, koder.css, koder.js, koder.reactjs)
        newKoderAverage.innerText = parseInt(koder.html + koder.css + koder.js + koder.reactjs)


                    



        
        
        
        
        
        
        /*let listItem = document.createElement("li")
        let itemText = document.createTextNode(koder)

        listItem.appendChild(itemText)
        listItem.classList.add("list-group-item")

        document.getElementById("new-ul").appendChild(listItem)
        */
    })

}


/*let dataTable = document.createElement("table")
        dataTable.className="table table-striped "
        document.body.appendChild(dataTable)*/

        






























/*
 let notesArray = [
    {
        signature: "español",
        note: 8
    },{
        signature: "mate",
        note: 9
    },{
        signature: "fisica",
        note: 10
    },{
        signature: "ingles",
        note: 7
    }
 ]

 
const createList = () => {
    //se crea el ul
    let listNotes = document.createElement("ul")
    listNotes.className = "list-group"
    document.body.appendChild(listNotes)

    const listNotesFunction = () => {
        //se crean los lis
        notesArray.forEach(item => {
        let litsLists = document.createElement("li")
        litsLists.className = "list-group-item"
        listNotes.appendChild(litsLists)
        let litsListsText = document.createTextNode(item.signature+":"+item.note)
        litsLists.appendChild(litsListsText)

        item.note > 8 ? litsLists.classList.add("bg-primary") : litsLists.classList.add("bg-warning")

        })

        
    }
    listNotesFunction()
}

createList()

//se crea el boton 
let buttonList = document.createElement("button")
buttonList.setAttribute("type", "button")
buttonList.className = "btn btn-dark"
document.body.appendChild(buttonList)
let deleteButtonText = document.createTextNode("eliminar")
buttonList.appendChild(deleteButtonText)

//se agrega el event listener
buttonList.addEventListener("click", () =>{ 
    console.log("hola")
})
*/



/*
let listNotes2 = document.createElement("ul")
document.body.appendChild(listNotes2)

const listNotesFunction2 = (materia, score) => {
    
    let litsLists2 = document.createElement("li")
    litsLists2.classList.add("list-group-item")

    listNotes2.appendChild(litsLists2)

    let litsListsText2 = document.createTextNode(`${materia}: ${score} `)
    litsLists2.appendChild(litsListsText2)
 
}

listNotesFunction2("html",10)
listNotesFunction2("js",9)
*/
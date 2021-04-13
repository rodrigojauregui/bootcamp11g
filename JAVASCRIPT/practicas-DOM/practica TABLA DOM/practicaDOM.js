let heading = document.createElement("h1")
document.body.appendChild(heading)

let headingText = document.createTextNode ("sometext")
heading.appendChild(headingText)

const namesArray = [
    "Jaime",
    "Beto",
    "mariana"
]



const listArray = () => {
    let unorderedList = document.createElement("ul")
    document.body.appendChild(unorderedList)
    namesArray.forEach(item =>{
        let listInside = document.createElement("li")
        unorderedList.appendChild(listInside)
        var listText = document.createTextNode (item)
        listInside.appendChild(listText)
    })
}
listArray()

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
const tableFunction = () => {
        let dataTable = document.createElement("table")
        dataTable.className="table table-striped "
        document.body.appendChild(dataTable)

            const tableHeaderFunction = () => {
                let tableHeader = document.createElement("thead")
                dataTable.appendChild(tableHeader)
                let tableHeaderRow = document.createElement("tr")
                tableHeader.appendChild(tableHeaderRow)
                let headerName = [ "MENTOR", "HTML", "CSS", "JS", "REACTJS", "AVERAGE"]

                headerName.forEach(item => {
                    let rowHeader = document.createElement("th");
                    tableHeaderRow.appendChild(rowHeader)
                    let rowHeaderName = document.createTextNode(item)
                    rowHeader.appendChild(rowHeaderName)
                })
            }

            const tableBodyFunction = () => {

                let tableBody = document.createElement("tbody")
                dataTable.appendChild(tableBody)

                mentorsArray.forEach(item => {
                    let tableBodyRow = document.createElement("tr")
                    tableBody.appendChild(tableBodyRow)
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
                    })
                    //promedio de los scores
                    let average = document.createElement("td")
                    tableBodyRow.appendChild(average)

                   item.scores.reduce((accum,current) => {
                       let avg = accum + current.score
                       return avg
                       console.log(avg)

                   },0)
                    
                    

                })

            }
        tableHeaderFunction()
        tableBodyFunction()
}
tableFunction()

const popo = () => mentorsArray.forEach (item => console.log(item.scores.reduce((accum,current) => accum + current.score,0)))
    

console.log(popo())   


    
    
     
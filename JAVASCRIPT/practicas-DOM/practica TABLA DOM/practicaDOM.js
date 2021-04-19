
/*
const namesArray = [
    "Jaime",
    "Beto",
    "mariana"
]

let unorderedList = document.createElement("ul")
unorderedList.classList.add("list-group")
document.body.appendChild(unorderedList)

const listArray = () => {

    
    namesArray.forEach(item =>{
        let listInside = document.createElement("li")
        unorderedList.appendChild(listInside)
        listInside.classList.add("list-group-item")
        var listText = document.createTextNode (item)
        listInside.appendChild(listText)
    })
}
listArray()
*/






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
    "AVERAGE"
]

let table = document.getElementById("table-mentors")
table.classList.add("table",  "table-striped")

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

let totalAverage = []
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
        })

        //se genera el reduce
        let tableBodyRowAverage= item.scores.reduce((accum,current) => accum + current.score/item.scores.length,0)
        // se crean los average td
        let tableBodyRowAverageTd = document.createElement("td")
        tableBodyRow.appendChild(tableBodyRowAverageTd)
        let tableBodyRowAverageTdText = document.createTextNode(tableBodyRowAverage)
        tableBodyRowAverageTd.appendChild(tableBodyRowAverageTdText)
        
        totalAverage.push(tableBodyRowAverage)
        
    })
}
tableBodyFunction()

totalAverage= (totalAverage.reduce((accum,current) => accum + current /totalAverage.length,0)).toFixed(2)
let totalAverageTd = document.getElementById("table-foot")
let totalAverageTdText = document.createTextNode(totalAverage)
totalAverageTd.appendChild(totalAverageTdText)
totalAverageTd.classList.add("bg-dark")
totalAverageTd.style.color = "white"




    
     
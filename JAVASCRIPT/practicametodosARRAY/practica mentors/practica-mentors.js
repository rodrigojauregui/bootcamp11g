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
// Obtener el score promedio de cada materia( HTML, CSS, JS, ReactJS )


const getAverage = (signature) =>{
    let signatureTotal = mentorsArray.reduce ((accum,current) =>{
        let signatureScores = current.scores.find(item => item.signature === signature).score
        //console.log(signatureScores)

        return accum + signatureScores
    },0)
    let average = signatureTotal/mentorsArray.length
    return average
}
let htmlAverage = getAverage("HTML")
let jsAverage = getAverage("JS")
let ReactJSAverage = getAverage("ReactJS")
let CSSAverage = getAverage("CSS")

console.log("HTML Average is:", htmlAverage)
console.log("JS Average is: ", jsAverage ) 
console.log("ReactJS Average is: ", ReactJSAverage)
console.log ("CSS average is: ", CSSAverage )







//Obtener el promedio individual de cada mentor

const getMentorsAverage = (mentorName) => {
    let selectedMentor = mentorsArray.find (mentor => mentor.name === mentorName ).scores
    let averageMentor = selectedMentor.reduce((accum, current) =>  accum + current.score,0)/ selectedMentor.length
    return averageMentor 
}

console.log("Michael Villalba Sotelo", getMentorsAverage("Michael Villalba Sotelo") );

//Obtener un array de strings con la siguiente forma:
    //"Mi nombre es {nombre} y mi promedio es de {promedio}"

const getMentorsArray = () => {

    let labelsArrays = mentorsArray.map(item => {
        return `el promedio de ${item.name} es de ${getMentorsAverage(item.name)} `
    })
    return labelsArrays
}
console.log(getMentorsArray())

//Obtener la lista de mentores cuyo promedio sea mayor a 9

const getMentors = () => {
    let result = mentorsArray.filter(mentor => getMentorsAverage(mentor.name) > 9)
    console.log(result)
}

getMentors()
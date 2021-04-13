/*
          //seleccionar elementos a traves de tagname

let listItems = document.getElementsByTagName("li")
console.log(listItems)


parece un array pero no puedo aplicarle metodos pero si puedo sacar el index [] y eso me entrega un objeto

          // seleccionar a atraves de su clase

let succesItems = document.getElementsByClassName("bg-success")
console.log(succesItems)

          //seleccionar elementos a traves de su id

let kodersLits = document.getElementById("koders-list")
console.log(kodersLits)

          //seleccion de multiples elementos

let textItalic = document.querySelector("#koders-list .bg-success .text-italic")
console.log(textItalic)

me trae la primera coincidencia 

let listGroup = document.querySelectorAll("#koders-list li")
listGroup.forEach( element => {
    element.classList.add("list-group-item")
    let textElement = element.innerText
})

solo a querySelectorAll le puedo aplicar un forEach
*/



/*
const addItem = (signature, note) => {
    let notesList = document.getElementById("notes-list");
    let noteLi= document.createElement("li")
    let noteText = document.createTextNode(`${signature} : ${note}`)

    noteLi.appendChild(noteText)
    noteLi.classList.add("list-group-item")

    note <8 ? noteLi.classList.add("bg-success") : noteLi.classList.add("bg-warning")
    notesList.appendChild(noteLi)
}

addItem("mate",10)
*/
/*
let mentorsArray = [
    {
      name: "Israel Salinas Martinez",
      scores: [
        {
          signature: "HTML",
          score: 8,
        },
        {
          signature: "CSS",
          score: 10,
        },
        {
          signature: "JS",
          score: 8,
        },
        {
          signature: "ReactJS",
          score: 8,
        },
      ],
    },
    {
      name: "David Cermeño Moranchel",
      scores: [
        {
          signature: "HTML",
          score: 8,
        },
        {
          signature: "CSS",
          score: 7,
        },
        {
          signature: "JS",
          score: 10,
        },
        {
          signature: "ReactJS",
          score: 10,
        },
      ],
    },
    {
      name: "Charles Silva",
      scores: [
        {
          signature: "HTML",
          score: 9,
        },
        {
          signature: "CSS",
          score: 9,
        },
        {
          signature: "JS",
          score: 10,
        },
        {
          signature: "ReactJS",
          score: 9,
        },
      ],
    },
    {
      name: "Michael Villalba Sotelo",
      scores: [
        {
          signature: "HTML",
          score: 8,
        },
        {
          signature: "CSS",
          score: 10,
        },
        {
          signature: "JS",
          score: 9,
        },
        {
          signature: "ReactJS",
          score: 10,
        },
      ],
    },
  ];
  
  let arrayTitles = ["Mentors", "HTML", "CSS", "JS", "ReactJS", "PROMEDIO"];
  
  const printMentorsTable = () => {
    let table = document.createElement("table");
    let titlesRow = document.createElement("tr");
  
    arrayTitles.forEach((titles) => {
      let tableHeader = document.createElement("th");
      let tableText = document.createTextNode(titles);

      tableHeader.appendChild(tableText);
      titlesRow.appendChild(tableHeader);
    });
    table.appendChild(titlesRow);
    mentorsArray.forEach((el) => {
      let mentorRow = document.createElement("tr");
      let nameMentorTd = document.createElement("td");
      let mentorNameText = document.createTextNode(el.name);

      mentorRow.appendChild(nameMentorTd);
      nameMentorTd.appendChild(mentorNameText);
  
      table.appendChild(mentorRow);
  
      let avg = 0;
  
      el.scores.reduce((acc, cur) => {
        let scoreTd = document.createElement("td");
        let scoreText = document.createTextNode(cur.score);
        
        mentorRow.appendChild(scoreTd);
        scoreTd.appendChild(scoreText);
  
        avg = acc + cur.score / el.scores.length;
  
        return avg;
      }, 0);
  
      let td = document.createElement("td");
      let txt = document.createTextNode(avg);
  
      mentorRow.appendChild(td);
      td.appendChild(txt);
      
    });
  
    document.body.appendChild(table);
  };
  
  printMentorsTable();
*/


// element.addEventListener({event}, callback)

document.getElementById("button").addEventListener("mouseover",
() =>{
 alert("hola")
})

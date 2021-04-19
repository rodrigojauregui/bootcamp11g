
const getAlbumData = () => {

  let inputs = document.querySelectorAll("form input[type='text']")

  let mentorObject = {}
    inputs.forEach(item =>{
      mentorObject[item.name] = item.value
  })
  
  saveData(mentorObject)

  inputs.forEach(field => {
    field.value = ""
  })

}

document.getElementById("save-koder").addEventListener("click", getAlbumData)

const saveData = (data) => {
  
    var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        console.log(xhttp.responseText)
        printTable(getData())
        }
      };
    xhttp.open("POST", "https://ajaxclass-1ca34.firebaseio.com/11g/rodrigo/mentors.json", true);
    xhttp.send(JSON.stringify(data));
  
}

const getData = () =>{

  let dataDownloaded;

  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       dataDownloaded = JSON.parse(xhttp.response)
      }
    };
  xhttp.open("GET", "https://ajaxclass-1ca34.firebaseio.com/11g/rodrigo/mentors.json", false);
  xhttp.send();

  return dataDownloaded
}

const deleteAlbums = event => {
  let dataKey = event.target.dataset.dataKey;

  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       console.log(xhttp.responseText)
       printTable(getData())
      }
    };
    xhttp.open("DELETE", `https://ajaxclass-1ca34.firebaseio.com/11g/rodrigo/mentors/${dataKey}.json`, false);
    xhttp.send();


}

const printTable = (data) => {

  let index = 1

  let table = document.getElementById("mentors-table")
  

  while (table.lastElementChild){
    table.removeChild(table.lastElementChild)
  }


  for (key in data){
    
    let {name, phone, age} = data[key]

    let tableRow = document.createElement("tr")
    let indexTd = document.createElement("td")
    let nameTd= document.createElement("td")
    let phoneTd = document.createElement("td")
    let ageTd = document.createElement("td")
    let buttonTd = document.createElement("td")

    let indexText = document.createTextNode(index)
    let nameText = document.createTextNode (name)
    let phoneText = document.createTextNode(phone)
    let ageText = document.createTextNode(age)
    let buttonText = document.createTextNode("delete")

    let deleteButton = document.createElement("button")
    deleteButton.classList.add("btn", "btn-danger")
    deleteButton.dataset.dataKey = key
    deleteButton.addEventListener("click", deleteAlbums)

    tableRow.appendChild(indexTd)
    tableRow.appendChild(nameTd)
    tableRow.appendChild(phoneTd)
    tableRow.appendChild(ageTd)
    tableRow.appendChild(buttonTd)

    indexTd.appendChild(indexText)
    nameTd.appendChild(nameText)
    phoneTd.appendChild(phoneText)
    ageTd.appendChild(ageText)
    buttonTd.appendChild(deleteButton)
    deleteButton.appendChild(buttonText)

    table.appendChild(tableRow)

    index ++
  }
}





/*
const deleteData = () =>{

  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       console.log(xhttp.responseText)
      }
    };
    xhttp.open("DELETE", "https://ajaxclass-1ca34.firebaseio.com/11g/rodrigo/mentors.json", false);
    xhttp.send();

}

deleteData()
*/











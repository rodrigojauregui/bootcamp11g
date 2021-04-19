

const getAlbumData = () => {
    
    let fields = document.querySelectorAll("form input[type='text']")
    
    let albumObject = {}
    fields.forEach(field => {
        albumObject[field.name] = field.value
    })

    let select = document.getElementById("gender")
    let gender = select.options[select.selectedIndex].value
    // solo se agrega lo que ya habia en albumObject, para eso se usa el operador de propagacion
    albumObject = {...albumObject,gender}
    console.log(albumObject)

    saveAlbum( albumObject )

    fields.forEach(field => {
        field.value = ""
    })

}


document.getElementById("save-album").addEventListener("click", getAlbumData)


//funcion para salvar en el servidor los datos 
const saveAlbum = album => {
    let xhttp = new XMLHttpRequest () ;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200){
            $('#save-succesfull').modal('show')
            printTable (getAlbums())
        }
    }
    xhttp.open("POST", "https://ajaxclass-1ca34.firebaseio.com/11g/rodrigo/albums.json", true)
    xhttp.send(JSON.stringify(album))
}

//funcion para bajar del servidor los datos 
const getAlbums = () => {

    let albumCollection;

    let xhttp = new XMLHttpRequest () ;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200){
            albumCollection= JSON.parse(xhttp.response)
        }
    }
    xhttp.open("GET", "https://ajaxclass-1ca34.firebaseio.com/11g/rodrigo/albums.json", false)
    xhttp.send();

    return albumCollection
}

//funcion par aborrar mentores
const deleteAlbums = event => {
let albumKey = event.target.dataset.albumKey    

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       console.log(xhttp.responseText)
       printTable (getAlbums())
      }
    };
    xhttp.open("DELETE",`https://ajaxclass-1ca34.firebaseio.com/11g/rodrigo/albums/${albumKey}.json`, true);
    xhttp.send();





}

// funcion para impirmir en la tabla
const printTable = (dataToPrint) => {

    let index = 1 
    let table = document.getElementById("albums-table")

    while (table.lastElementChild){
        table.removeChild(table.lastElementChild)
    }

    for ( key in dataToPrint){

        let {name, gender, band} = dataToPrint[key]

        let albumRow = document.createElement("tr")
        let indexTd = document.createElement("td")
        let nameTd= document.createElement("td")
        let bandTd = document.createElement("td")
        let genderTd = document.createElement("td")
        let buttonTd = document.createElement("td")

        let indexText = document.createTextNode(index)
        let nameText = document.createTextNode (name)
        let bandText = document.createTextNode(band)
        let genderText = document.createTextNode(gender)
        
        let deleteButton = document.createElement("button")
        deleteButton.classList.add("btn", "btn-danger")
        deleteButton.dataset.albumKey = key

        let deleButtonText = document.createTextNode("delete")
        deleteButton.appendChild(deleButtonText)

        deleteButton.addEventListener("click", deleteAlbums )

        indexTd.appendChild(indexText)
        nameTd.appendChild(nameText)
        bandTd.appendChild(bandText)
        genderTd.appendChild(genderText)
        buttonTd.appendChild(deleteButton)

        albumRow.appendChild(indexTd)
        albumRow.appendChild(nameTd)
        albumRow.appendChild(bandTd)
        albumRow.appendChild(genderTd)
        albumRow.appendChild(buttonTd)

        table.appendChild(albumRow)
        index++

    }

}








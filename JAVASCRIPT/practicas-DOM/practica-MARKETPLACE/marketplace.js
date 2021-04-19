

const getMarketplaceData = () => {
    
    let fields = document.querySelectorAll("form input[type='text']")
    
    let marketplaceObject = {}
    fields.forEach(field => {
        marketplaceObject[field.name] = field.value
    })

    let select = document.getElementById("category")
    let category = select.options[select.selectedIndex].value
    // solo se agrega lo que ya habia en albumObject, para eso se usa el operador de propagacion
    marketplaceObject = {...marketplaceObject,category}
    console.log(marketplaceObject)

    saveData( marketplaceObject )

    fields.forEach(field => {
        field.value = ""
    })

}

document.getElementById("save-product").addEventListener("click",getMarketplaceData)

const saveData = (data) => {
  
    var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        console.log(xhttp.responseText)
        printCard(getData())
        }
      };
    xhttp.open("POST", "https://ajaxclass-1ca34.firebaseio.com/11g/rodrigo/marketplace.json", true);
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
    xhttp.open("GET", "https://ajaxclass-1ca34.firebaseio.com/11g/rodrigo/marketplace.json", false);
    xhttp.send();
  
    return dataDownloaded
}

const deleteMarketPlace = event => {
  console.log(event)
    let dataKey = event.target.dataset.dataKey;
  
    var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
         console.log(xhttp.responseText)
         printCard(getData())
        }
      };
      xhttp.open("DELETE", `https://ajaxclass-1ca34.firebaseio.com/11g/rodrigo/marketplace/${dataKey}.json`, false);
      xhttp.send();
  
  
  }


const printCard = (data) => {

    let cardRow = document.getElementById("card-row");

   while (cardRow.lastElementChild){
        cardRow.removeChild(cardRow.lastElementChild)
      }

    for (key in data){

        let {url, name, description, price, category} = data[key]

        let div = document.createElement("div")
        div.classList.add("col-3")
        cardRow.appendChild(div)

        let divCardDeck = document.createElement("div")
        divCardDeck.classList.add("card-deck")
        div.appendChild(divCardDeck)

        let div2 = document.createElement("div")
        div2.classList.add("card", "bg-warning", "mt-2")
        div2.style.width = "18rem"
        divCardDeck.appendChild(div2)

        let img = document.createElement("img")
        img.src= url
        img.classList.add("card-img-top", "img-thumbnail")
       
        img.style.height= "16rem"
        div2.appendChild(img)

        let div3 = document.createElement("div")
        div3.classList.add("card-body")
        div2.appendChild(div3)

        let h5 = document.createElement("h5")
        h5.classList.add("card-title")
        div3.appendChild(h5)
        let h5Text = document.createTextNode(name)
        h5.appendChild(h5Text)

        let descriptionP = document.createElement("p")
        div3.appendChild(descriptionP)
        let descriptionText = document.createTextNode(description)
        descriptionP.appendChild(descriptionText)

        let priceP = document.createElement("p")
        div3.appendChild(priceP)
        let priceText = document.createTextNode(`$${price}`)
        priceP.appendChild(priceText)

        let categoryP = document.createElement("p")
        div3.appendChild(categoryP)
        let categoryText = document.createTextNode(category)
        categoryP.appendChild(categoryText)

        let deleteButton = document.createElement("button")
        deleteButton.classList.add("btn", "btn-danger")
        div3.appendChild(deleteButton)

        deleteButton.dataset.dataKey = key
        deleteButton.addEventListener("click", deleteMarketPlace)



        let deleteButtonText = document.createTextNode("delete")
        deleteButton.appendChild(deleteButtonText)

    }




}

printCard(getData)







let file;
document.getElementById("file-input").addEventListener("change" , event => {
    file = event.target.files[0]
    let reader = new FileReader()
    reader.onload = function(e) {
        $('').attr('', e.target.result)
    }

})
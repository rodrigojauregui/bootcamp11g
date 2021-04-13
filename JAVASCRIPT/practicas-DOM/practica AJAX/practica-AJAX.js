
const saveData = () => {
    let xhttp = new XMLHttpRequest () ;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200){
            let response = xhttp.responseText
        }
    }
    xhttp.open("POST", "https://ajaxclass-1ca34.firebaseio.com/11g/rodrigo/mentors.json", true)
    xhttp.send(JSON.stringify(koderList))
}

let koderList = []

const getData = () => {

    while (koderList.lastElementChild) {
        koderList.removeChild( koderList.lastElementChild );
    }

    function KoderListFunction (name, phone, age, color){
        this.name = name;
        this.phone = phone;
        this.age = age;
        this.color = color;
    }

    let mentorName = document.getElementById("mentorName").value;
    let mentorPhone = document.getElementById("mentorPhone").value;
    let mentorAge = document.getElementById("mentorAge").value;
    let mentorColor = document.getElementById("mentorColor").value;

   

    const newKoderForm = new KoderListFunction (mentorName, mentorPhone, mentorAge, mentorColor)

    koderList.push(newKoderForm)

    saveData()
    console.log(koderList)


    document.getElementById("mentorName").value = " "
    document.getElementById("mentorPhone").value = " "
    document.getElementById("mentorAge").value = " "
    document.getElementById("mentorColor").value = " ";

    




}
getData()

document.getElementById("save-koder").addEventListener("click", getData )

const deleteData = (data) => {
    let xhttp = new XMLHttpRequest () ;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200){
            let response = xhttp.responseText
        }
    }
    xhttp.open("DELETE", "https://ajaxclass-1ca34.firebaseio.com/11g/rodrigo/mentors.json", true)
    xhttp.send()
}
deleteData()
document.getElementById("delete-koder").addEventListener("click", deleteData )


//crear unendpoint para borrar 'DELETE' /koders/:id

//GET /koders/:id

const { request, response } = require('express');
const express = require('express');
const fs = require('fs')
const server = express();
//middleware
server.use(express.json())

function getKodersFile(){
    const content = fs.readFileSync('koders.json', 'utf8')
    return JSON.parse(content)
}

server.get('/koders/:id', (request, response) => {

    const id = parseInt(request.params.id)    

    const json = getKodersFile()

    const filteredKoder = json.koders.find(item => {
        
        return item.id === id
    })
    console.log(filteredKoder)
    if (!filteredKoder){
        response.status(404)
        response.json({
            success: false,
            message: 'koder not found'
        })
        return
    } else {
        response.status(200)
        response.json({
            success: true,
            message: 'koder found',
            data:{
                koder: filteredKoder
            }
        })
    }
})


server.delete('/koders/:id', (request, response) => {

    const id = parseInt(request.params.id)    

    const json = getKodersFile()

    const newKoders = json.koders.filter(koder => {
        return koder.id != id
    })
    
    json.koders = newKoders
    fs.writeFileSync('koders.json', JSON.stringify(json, null, 2), 'utf8')

    response.json({
        success: true
    })
})


server.listen(8080, () => {
    console.log('Server listening in port 8080')
    })


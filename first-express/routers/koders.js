
const express = require('express')
const fs = require('fs')

const router = express.Router()


function getKodersFile(){
    const content = fs.readFileSync('koders.json', 'utf8')
    return JSON.parse(content)
}

// /recurso/identificador
router.patch('/:id', (request, response) => {
    //los : significan que se puede reemplazar por un valor
    const id = parseInt(request.params.id)    //string
    const name = request.body.name;

    const json = getKodersFile()

    const newKoders = json.koders.reduce((accum, current) => {
        if (id === current.id){
            current.name = name
        }
        return [
            ...accum,
            current
        ]
    }, [])

    json.koders = newKoders
    fs.writeFileSync('koders.json', JSON.stringify(json, null, 2), 'utf8')

    response.json({
        success: true
    })
})

/*
router.get('/koders', (request, response) => {

    const genderFilter = request.query.gender
    const json = getKodersFile()

    let kodersData = null

    if (genderFilter){
        const kodersFilteredByGender = json.koders.filter(koder => koder.gender === genderFilter);
        kodersData = kodersFilteredByGender
    }
   
    json.koders = kodersData || json.koders

    //console.log(request.query)
    console.log(request)

    const filteredKoder = json.koders.find(item =>  item.id === id)
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
*/

router.delete('/:id', (request, response) => {

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


//  QUERY PARAMETERS
router.get('/', (request, response) => {
    const genderFilter = request.query.gender
    const countFilter = parseInt(request.query.count) 
    const nameFilter = request.query.name

    const json = getKodersFile()
    let kodersData = null

    if (genderFilter){
        kodersData = json.koders.filter(koder => koder.gender === genderFilter);
    }

    if(nameFilter){
        let dataToFilter = kodersData || json.koders
        kodersData = dataToFilter.filter(koder => koder.name === nameFilter);
    }

    if (countFilter){
        let dataToFilter = kodersData || json.koders
        kodersData = dataToFilter.slice(0,countFilter)
    }

    json.koders = kodersData || json.koders
    response.json(json.koders)
})

module.exports = router
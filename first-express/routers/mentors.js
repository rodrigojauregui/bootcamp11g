

const express = require('express')
const fs = require('fs')

const router = express.Router()


function getMentorsFile(){
    const content = fs.readFileSync('koders.json', 'utf8')
    return JSON.parse(content)
}

router.get('/', (request, response) => {
     /* OPCION CON readFileSync*/
     const json = getMentorsFile()
     response.json(json.mentors)
})

router.get('/:id', (req,res)=> {
    const id = req.params.id
    const json = getMentorsFile()

    const koder = json.mentors.reduce((acc,cur)=>  {
        if(id == cur.id){
            return res.json(cur)
        }else{
            console.log('No se encontro ningun koder con ese id');
        }
    } ,{})
})


router.post('/', (req, res) => {
    const newKoder = req.body;
    let allKoders = getMentorsFile()
    allKoders.mentors.push(newKoder)

    fs.writeFile('koders.json', JSON.stringify(allKoders, null, 2), err => {
        if (err) {
            console.error('ERROR: ', err)
            res.status(401);
            res.end()
        }
    })

    res.status(201);
    res.json({
        message: 'ok'
    })
})

router.patch('/:id', (request, response) => {
    //los : significan que se puede reemplazar por un valor
    const id = parseInt(request.params.id)    //string
    const name = request.body.name;

    const json = getMentorsFile()

    const newKoders = json.mentors.reduce((accum, current) => {
        if (id === current.id){
            current.name = name
        }
        return [
            ...accum,
            current
        ]
    }, [])

    json.mentors = newKoders
    fs.writeFileSync('koders.json', JSON.stringify(json, null, 2), 'utf8')

    response.json({
        success: true
    })
})


router.delete('/:id', (request, response) => {

    const id = parseInt(request.params.id)    

    const json = getMentorsFile()

    const newKoders = json.mentors.filter(mentor => {
        return mentor.id != id
    })
    
    json.mentors = newKoders
    fs.writeFileSync('koders.json', JSON.stringify(json, null, 2), 'utf8')

    response.json({
        success: true
    })
})

module.exports = router
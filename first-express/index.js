/*
const { Console } = require('console');
const { request, response } = require('express');
*/
const { request, response } = require('express');
const express = require('express');

const kodersRouter = require('./routers/koders')
const mentorsrouter = require('./routers/mentors')
const server = express();
//middleware
server.use(express.json())
server.use('/koders', kodersRouter)
server.use('/mentors', mentorsrouter)


/*
server.get('/hola', (request, response) => {

    // OPCION CON PROMISES
    
    fs.promises.readFile('koders.json', 'utf8')
    .then(data => {
        console.log(data)
        response.json(JSON.parse(data))
    })
    .catch(error => console.error(error))
    
    //OPCION CON readFileSync
    
    const data = fs.readFileSync('koders.json', 'utf8')
    console.log(data)
    response.json(JSON.parse(data))
    
})
*/

/* OPCION CON ASYNC y AWAIT*/
/*
server.get('/hola', async(request, response) => {
    const result = await fs.promises.readFile('koders.json', 'utf8');
    console.log(result)
    response.json(JSON.parse(result))
})


server.post('/koders', (request, response) => {
    const name = request.body.name;
    const gender = request.body.gender;

    const newKoder = {name, gender}

    const content = fs.readFileSync('koders.json', 'utf8')
    const json = JSON.parse(content)

    json.koders.push(newKoder)
    fs.writeFileSync('koders.json', JSON.stringify(json, null, 2), 'utf8')

    response.json({
        success: true
    })
})
*/


server.listen(8080, () => {
    console.log('Server listening in port 8080')
    })

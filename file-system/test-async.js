
const fs = require('fs')

/*
fs.promises.writeFile('nuevo.txt', 'hola')
    .then (() => {
        console.log('todo bien')
    })
    .catch(error => console.error(error))
*/
/*
fs.promises.readFile('nuevo.txt')
    .then(function(result) {
        console.log(""+result);
    })
  .catch(function(error) {
     console.log(error)
    })
*/
/*
fs.promises.appendFile('nuevo.txt', 
    '\n new string for exercise')
    .then(() => {
        console.log('ya se incluyo el texto seleccionado')
        
    })
    .catch(error => {
        console.log(error)
    })
*/
/*
fs.promises.unlink('createdtetxt.txt')
    .then( () => {
        console.log('el archivo ha sido borrado')
    })
    .catch( () => {
        console.log(error)
    })
*/
/*
fs.promises.copyFile('nuevo.txt', 'newCopiedFile.txt')
    .then( () => {
        console.log('el archivo ha sido cambiado de directorio')
    })
    .catch( () => {
        console.log(error)
    })
*/
/*
fs.promises.mkdir('carpeta-de-prueba')
    .then( () => {
        console.log('la carpeta ha sido creada')
    })
    .catch( () => {
        console.log(error)
    })
*/
/*
fs.promises.rmdir('carpeta-de-prueba')
    .then( () => {
        console.log('la carpeta ha sido eliminada')
    })
    .catch( () => {
        console.log(error)
    })
*/
/*
async function print(path) {
    const files = await fs.promises.readdir(path);
    for (const file of files) {
      console.log(file);
    }
  }
  print('carpeta-de-prueba').catch(console.error);
*/git status
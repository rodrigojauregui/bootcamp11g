

const ejemploMuro = {
    construido: false,
    aplanado: false,
    pintado: false
}

const tiempoDeEspera = 100;

function construir (muro, cb) {
    setTimeout(() => {
        muro.construido = true;
        cb (false,  muro)
    }, tiempoDeEspera)
}

function aplanar (muro, cb) {
    setTimeout(() => {
        muro.aplanado = true;
        cb (false,  muro)
    }, tiempoDeEspera)
}

function pintar (muro, cb) {
    setTimeout(() => {
        muro.pintado = true;
        cb (false,  muro)
    }, tiempoDeEspera)
    return muro
}

construir (ejemploMuro, (error, muroConstruido) => {
    if (error){
        console.error('no se pudo construir')
        return 
    }
    console.log(muroConstruido)
    aplanar (muroConstruido, (error, muroAplanado) => {
        if (error){
            console.error('no se pudo aplanar')
            return
        }
        console.log(muroAplanado)

        pintar( muroAplanado, (error, muroPintado) => {
            if (error){
                console.error('no se pudo pintar')
                return
            }
            console.log(muroPintado) 
        })
    })
})

function prueba () {
    setTimeout(() => {
       console.log(ejemploMuro)
    }, 500)
}
prueba()

console.log(ejemploMuro)     

const fs = require('fs');
const colors = require('colors')


const  crearArchivo = async (base = 5, listar=false, hasta=10) => {
    
    let salida = '';
    let console_salida = '';
    try {

        console.clear();
    
     for (let i = 1; i <= hasta; i++){
        salida +=`${base} ${'X'.green} ${i} ${'='.green}  ${i * base}\n` 
        console_salida +=`${base} x ${i} =  ${i * base}\n` 
    }
        if (listar) {
            console.log("===============================".green);
            console.log(`        TABLA DEL ${ colors.green(base)} `);
            console.log("===============================".green);
            console.log(salida);
        }
        
     fs.writeFileSync(`./salida/tabla-${base}.txt`, console_salida);

    // console.log(`tabla-${base}.txt creado`)
    
    return `tabla-${base}.txt`;
    } catch (error) {
        return error;
    }
   
}

module.exports = {
     crearArchivo
}
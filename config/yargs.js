const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: "Base para multiplicar"
    }).option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: "Muestra la tabla en consola"
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: "Realiza la multiplicacion hasta el numero enviado"
    })
    .check((arg, options) => {
        if (isNaN(arg.base)) {
            throw "La base debe ser un numero";
        }
         if (isNaN(arg.hasta)) {
            throw "hasta debe ser un numero";
        }
        return true;
    })            
    .argv;

module.exports = argv;
    
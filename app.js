const colors = require('colors');
const argv = require('./config/yargs');

const { crearArchivo } = require("./helpers/multiplicar")

console.log(argv);


crearArchivo(argv.base, argv.listar, argv.hasta).then(archive => {
    console.log(colors.inverse(archive), "creado ");
}).catch(err => {
    console.log(err);
});
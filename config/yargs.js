const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea el archivo de la tabla de multiplicar', opts)
    .help()
    .argv;

// para poder exportar las funciones o clases
module.exports = {
    argv
}
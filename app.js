// lo siguiente de yargs se optimiso y se paso a config/yargs.js
// 
// const argv = require('yargs')
//     .command('listar', 'Imprime en consola la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .command('crear', 'Crea el archivo de la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .help()
//     .argv;

// fin yargs que se pago a config/yargs.js

// se cambia lo anterior por esa importacion el .argv es para usar solo o importar solo esa funsion del config/yargs

const argv = require('./config/yargs').argv;

// colors

const colors = require('colors');

// uso normal para importar un aarchivo
// const multiplicar = require('./multiplicar/multiplicar');
// se destructura para poder usar mas facil la llamada de las funciones de ese archivo en este archivo

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(datos => console.log(`Tabla creada:\n${ datos }`))
            .catch(err => console.error(err));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado:'.green + ` ${ archivo }`))
            .catch(err => console.error(err));
        break;
    default:
        console.log('Comando no reconocido');
}

// console.log(multiplicar);


let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(process.argv);
// console.log(base);


// console.log(argv.limite);
// console.log(argv.base);
// console.log(argv2);
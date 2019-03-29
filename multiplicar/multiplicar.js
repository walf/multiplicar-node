// Requireds
const fs = require('fs');

// colors

const colors = require('colors');

// se crea una promesa en la funcion crearArchivo para que retorne el nombre del archivo creado o el error
let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido "${ base }" no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido de limite "${ limite }" no es un número`);
            return;
        }

        let datos = '';


        for (i = 1; i <= limite; i++) {
            datos += `${base} * ${i} = ${base * i}\n`;
        }

        const data = new Uint8Array(Buffer.from(datos));
        fs.writeFile(`tablas/tabla-del-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-del-${ base }-al-${ limite }.txt`)
                // console.log(`El archivo tabla-${ base }.txt ha sido creado.`);
        });
    });
}

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido de base "${ base }" no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido de limite "${ limite }" no es un número`);
            return;
        }
        let datos = '';


        for (i = 1; i <= limite; i++) {
            datos += `${base} * ${i} = ${base * i}\n`;
        }

        resolve(datos);


    });
}

// para importar archivos o funciones en el proyecto en otro documento hay que agregarlo al module exports 
module.exports = {
    crearArchivo,
    listarTabla
}
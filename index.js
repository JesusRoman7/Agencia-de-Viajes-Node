//Archivo sobre el cual vamos a configurar express
// const express = require('express'); //del paquete de express que hemos instalado, vamos a extraer express

import express from 'express';
import router from './routes/index.js'; //para usar todo lo de router, lo importamos aqui
import db from './config/db.js';


const app = express(); //ejecutamos express como funcion

//Definir Puerto en el que lo queremos ejecutar
const port = process.env.port || 4000;

//Conectar a la base de datos
db.authenticate()
    .then(()=> {
        console.log('Base de Datos Conectada');
    })
    .catch(error => console.log(error))


// app.get('/', (req, res) => { //request/ lo que enviamos/peticion y respond/respuesta
//     res.send('Inicio')
// });

// app.get('/nosotros', (req, res) => { //request/ lo que enviamos/peticion y respond/respuesta
//     res.send('Nosotros')
// });

// app.get('/contacto', (req, res) => { //request/ lo que enviamos/peticion y respond/respuesta
//     res.send('Contacto')
// });

//Habilitar PUG porque lo queremos utilizar
app.set('view engine', 'pug');

//Creando el Middlware para Obtener el año actual
app.use((req, res, next)=> {
// res.locals.unaVariable = 'Una Nueva Variable';
const year = new Date();

res.locals.actualYear = year.getFullYear();
res.locals.nombreSitio = 'Agencia de Viajes';

console.log(res.locals);
next();
})

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}))

//Definir la Carpeta Publica
app.use(express.static('public'))

//Agregando el Router
app.use('/', router); //use soporta get, post, put, patch y delete, lo que hacemos es que desde la pagina principal '/' agrega router, que serian la / , nosotros, contacto y asi sucesivamente

app.listen(port, ()=>{
    console.log(`El servidor esta funcionando en el puerto ${port} `);
})
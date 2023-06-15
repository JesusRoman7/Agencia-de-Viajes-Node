//Aqui colocaremos todo lo relacionado a las rutas
import express from 'express';
//este codigo de arriba y el de abajo van tomados de la mano cuando creamos el archivos de routes
const router = express.Router(); //estamos usando la misma instancia, la de const app = express(); pero estamos extendiendo su router, ya que no podemos crear otro const app = express(); aqui, es por eso que la extendemos

import {paginaInicio, paginaNosotros, paginaTestimoniales, paginaViajes, paginaDetalleViaje} from '../controllers/paginasController.js'
import { guardarTestimonial } from '../controllers/testimonialController.js';

//En vez de app, se reemplaza por router
// router.get('/', (req, res) => { //request/ lo que enviamos/peticion y respond/respuesta
//     res.render('Inicio', {
//         pagina: 'Inicio'
//     }) //render busca el nombre que sea igual en la carpeta de views
// });

router.get('/', paginaInicio);

// router.get('/nosotros', (req, res) => { //request/ lo que enviamos/peticion y respond/respuesta
//     res.send('Nosotros')
// });

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);
router.get('/viajes/:boton', paginaDetalleViaje); //nos sirve para el boton cuando demos click

router.get('/testimoniales', paginaTestimoniales);

router.post('/testimoniales', guardarTestimonial);

router.get('/contacto', (req, res) => { //request/ lo que enviamos/peticion y respond/respuesta
    res.send('Contacto')
});


export default router; //lo exportamos para poder importalo en nuestra app

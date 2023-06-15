//Importando el modelo de Viaje con toda la info de la base de datos que necesitamos para que se muestre en la pestaña de viajes
import {Viaje} from '../models/Viaje.js';
import {Testimonial} from '../models/Testimoniales.js';

const paginaInicio = async (req, res) => { 
    //Consultar 3 viajes del modelo viaje
    // const promiseDB = [];

    // promiseDB.push(Viaje.findAll({ limit: 3}))
    // promiseDB.push(Testimonial.findAll({ limit: 3}))
    try {
        // const resultado = await Promise.all(promiseDB);


        //Otra Opcion mas sencilla es Aplicando Destructuring
        const [viajes, testimoniales] = await Promise.all([
            Viaje.findAll({ limit: 3 }),
            Testimonial.findAll({ limit: 3 })
          ]);

        res.render('Inicio', {
            pagina: 'Inicio',
            clase: 'home',
            // viajes: resultado[0],
            // testimoniales: resultado[1]
            viajes,
            testimoniales
        })    
    } catch (error) {
        console.log(error);
    }
}

const paginaNosotros = (req, res) => { //request/ lo que enviamos/peticion y respond/respuesta

    res.render('nosotros', {
        pagina: 'Nostros'
    })
}

const paginaViajes = async (req, res) => { //request/ lo que enviamos/peticion y respond/respuesta
    //Consultar BD
    const viajes = await Viaje.findAll();

    console.log(viajes);

    res.render('viajes', {
        pagina: 'Proximos Viajes',
        resultado: viajes
    })
}

const paginaTestimoniales = async (req, res) => { //request/ lo que enviamos/peticion y respond/respuesta
    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        })   
    } catch (error) {
        console.log(error);
    }
}

//Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    const {boton} = req.params
    console.log(boton)
    
    try {
        const resultado = await Viaje.findOne({ where : {slug: boton}});

        res.render('viaje', {
            pagina: 'Informacion Viaje',
            resultado
        })
        
    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}
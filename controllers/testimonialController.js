import { Testimonial } from '../models/Testimoniales.js'
const guardarTestimonial = async (req, res) => {

    //Validar los campos
    const {nombre, correo, mensaje} = req.body;

    const errores = []; //hacemos el arreglo para que nos agregue los errores o si estan bien y asi poder iterar

    if(nombre === ''){
        errores.push({mensaje : 'El nombre esta vacio'})
    }

    if(correo === ''){
        errores.push({mensaje : 'El correo esta vacio'})
    }

    if(mensaje === ''){
        errores.push({mensaje : 'El mensaje esta vacio'})
    }
    
    if(errores.length > 0){
        //Consultar Testimoniales Existentes
        const testimoniales = await Testimonial.findAll();
        //Mostrar la vista con errores
        res.render('testimoniales', { //esto es para que cuando demos click en enviar y tengamos errores, muestre de nuevo la pag
            pagina: 'Testimoniales',
            errores, //le pasamos la lista de errores al testimonial
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    }else {
        //Almacernarlo en la base de datos
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            })
            res.redirect('/testimoniales'); //esto nos sirve para que cuando demos click en enviar ya no se quede cargando y nos envie
            //directo a la pagina de testimoniales
        } catch (error) {
            console.log(error);
        }
    }
    console.log(errores); //nos muestra el arreglo de objetos de errores

    console.log(req.body); //req.body sera lo que el usuaio ponga en el formulario
}

export {
    guardarTestimonial
}
import Sequelize from "sequelize";
import db from "../config/db.js";

//Nota: el primer parametro sera el nombre de la tabla, tiene que ir especificado en plural
export const Viaje = db.define('viajes', {
    //Pondremos cada una de las columnas
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    },
})
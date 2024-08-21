//Importar conexion a la base de datos
import conectarDb  from "../config/db.js";

//Importar sequelize
import { DataTypes } from "sequelize";

const Citas = conectarDb.define('citas',{

    n_medico: 
    {
        type: DataTypes.STRING,
        allowNull: false
    },

    especialidad: 
    {
        type: DataTypes.STRING,
        allowNull: false
    },

    fecha: 
    {
        type: DataTypes.STRING,
        allowNull: false
    },

    duracion: 
    {
        type: DataTypes.STRING,
        allowNull: false
    },
})

export default Citas;
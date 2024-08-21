//Importar el modelo

import Citas from '../models/citas.js';

//Funcion agregar citas

export const agregarCitas = async (req,res) => {
    try {
        await Citas.create(req.body);
        res.json({msg:"Se agrego una nueva cita"});

    } catch (error) {
        res.json({msg: error.message});
    }
    
}


//Funcion mostrar citas
export const mostrarCitas = async (req, res) => {
    try {
        const citas = await Citas.findAll()
        res.json(citas);
    } catch (error) {
        res.json({msg: error.message});
    }
}

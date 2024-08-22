//Importar express
import express from 'express';

//Importar controlador
import { agregarCitas, mostrarCitas, getCita, modificarCita, eliminarCita } from '../controller/citasController.js';


const router = express.Router();

//Metodos Crud
router.post('/', agregarCitas);
router.get('/', mostrarCitas);
router.get('/:id',getCita);
router.patch('/:id', modificarCita);
router.delete('/:id', eliminarCita);


export default router;


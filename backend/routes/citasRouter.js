//Importar express
import express from 'express';

//Importar controlador
import { agregarCitas, mostrarCitas } from '../controller/citasController.js';


const router = express.Router();

//Metodos Crud
router.post('/', agregarCitas);
router.get('/', mostrarCitas);


export default router;


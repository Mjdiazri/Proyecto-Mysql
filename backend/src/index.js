//Importar Express
import express from 'express';

//Importar Cors
import cors from 'cors';

//Importar conexion a base de datos (Previamente se debe crear archivo db.js en carpeta config)
import conectarDb from '../config/db.js';

//Iimportar archivos de las rutas
import citasRouter from '../routes/citasRouter.js';


const app = express();
app.use(cors());
app.use(express.json());

//Importar archivo routercitas
app.use('/api/citas', citasRouter);


const port = 5000;

//Verificar conexion a la base de datos
try {
    await conectarDb.authenticate();
    console.log('Conexion a la base de datos realizada con exito');
} catch (error) {
    console.error('Hubo un problema al conectar a la base de datos', error);
}

//Verificar para probar conexion a la pagina
app.get('/', (req, res) => {
    res.send('Hola mundo')
});

//Configuracion servidor
app.listen(port, () => {
    console.log('El servidor esta corriendo http://localhost:5000');

})
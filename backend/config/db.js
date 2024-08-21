//En lugar de importar mongo se importa sequielize
import { Sequelize }  from "sequelize";

const conectarDb = new Sequelize ('dbcitas','root','',{
    host: 'localhost',
    dialect: 'mysql',
})

export default conectarDb; 


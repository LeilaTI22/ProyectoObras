const mysql = require('mysql2');
const conexion = mysql.createConnection({
    host     : 'us-cdbr-east-06.cleardb.net',
    user     : 'b7717285b53e31',
    password : '9f35e633',
    database : 'heroku_e186674c0d599bd'  
});
conexion.connect((error)=>{
    if (error) {
      console.error('El error de conexión es: ' + error);
      return;
    }
    console.log('¡Conectado a la Base de Datos!');
  });
module.exports = conexion;
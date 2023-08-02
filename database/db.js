const mysql = require('mysql2');
const conexion = mysql.createConnection({
    host     : 'containers-us-west-141.railway.app',
    user     : 'root',
    password : 'pBmOKxjAb8NXDrGAO6WA',
    database : 'railway',
    port: 6090
});
conexion.connect((error)=>{
    if (error) {
      console.error('El error de conexión es: ' + error);
      return;
    }
    console.log('¡Conectado a la Base de Datos!');
  });
module.exports = conexion;

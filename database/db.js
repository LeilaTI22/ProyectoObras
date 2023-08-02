const mysql = require('mysql2');
const conexion = mysql.createConnection({
    host     : 'dpg-cj5bmiee546c739fl9tg-a',
    user     : 'leilati',
    password : 'RRt4uH31zpBAkd745erTJo7ykQ1NeuOS',
    database : 'obras',
    port: 5432
});
conexion.connect((error)=>{
    if (error) {
      console.error('El error de conexión es: ' + error);
      return;
    }
    console.log('¡Conectado a la Base de Datos!');
  });
module.exports = conexion;

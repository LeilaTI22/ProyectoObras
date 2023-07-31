//Invocamos a la conexion de la DB
const conexion = require('../database/db');
//GUARDAR un REGISTRO
exports.save = (req, res)=>{
    const nombre = req.body.nombre;
    const artista = req.body.artista;
    const tipo = req.body.tipo;
    conexion.query('INSERT INTO obras SET ?',{nombre:nombre, artista:artista, tipo:tipo}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/');         
        }
});
};
//ACTUALIZAR un REGISTRO
exports.update = (req, res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const artista = req.body.artista;
    const tipo = req.body.tipo;
    conexion.query('UPDATE obras SET ? WHERE id = ?',[{nombre:nombre, artista:artista, tipo:tipo}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
});
};
const express = require('express');
const webPush = require('web-push');
const cors = require('cors');

const server = express();

server.use('/admin', function(req, res, next){
    console.log('[RH] Peticion ', req);
    req.mensaje = 'Hola nena';
    next();
});

server.get('/', function(req, res){
    // ACA TENGO LA PETICION HTTP HABIENDO YA
    // PASADO POR TODOS LOS REQUESTHANDLER.
    if(req.mensaje)
        res.send(req.mensaje)
    else
        res.send('Hola mundo');
});

server.get('/admin', function(req, res){
    // ACA TENGO LA PETICION HTTP HABIENDO YA
    // PASADO POR TODOS LOS REQUESTHANDLER.
    if(req.mensaje)
        res.send(req.mensaje)
    else
        res.send('Hola mundo');
});

server.get('/admin/msj', function(req, res){
    // ACA TENGO LA PETICION HTTP HABIENDO YA
    // PASADO POR TODOS LOS REQUESTHANDLER.
    if(req.mensaje)
        res.send(req.mensaje)
    else
        res.send('Hola mundo');
});


server.listen(3000, function(){
    console.log('Servidor ejecutandose en http://localhost:3000');
});
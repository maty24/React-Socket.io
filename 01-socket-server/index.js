//servidor express
const express = require('express');
const app = express();

//servidor socket
const server = require('http').createServer(app);

//configuracion del socket server
const io = require('socket.io')(server);

//Desplegar directorio publico
app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => { 


    socket.on('mensaje-to-server',(data) =>{ //cuando pongo socket solo le respndo al que le envio el mensaje y si pongo io le envia a todas la personas que estan conectadas
        console.log(data);
        socket.emit('mensaje-from-server', data);
    })

   /*
   socket.emit('mensaje-bienvenida',{
    msg: 'Bienvenido al server',
    fecha: new Date()
   }) //esto es para emitir un evento  con el emit

    //escuchar evento
   socket.on('mensaje',(data) =>{ //el primer parametro es elmismo primer parametro del cliente
    console.log(data);
   })*/
});



server.listen(8080, () =>{
    console.log('Server corriendo en el puerto 8080');
});
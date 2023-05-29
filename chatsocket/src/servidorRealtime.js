module.exports = httpServer => {
    const { Server } = require("socket.io");
    const io = new Server(httpServer);
    io.on("connection", socket => {

        const cookie = socket.handshake.headers.cookie;
        const user = cookie.split("=").pop();

        socket.on("message", message => {

            io.emit("message", {
                user, message
            });

        })
        console.log(socket.id);

        //****///**** */ */
        socket.on('disconnect', () => {
            console.log('el socket '+ socket.id + ' se ha desconectado')
        });
        /****//*1///// */
        socket.on('mensaje', () => {
            console.log('Mensaje recibido: ', "mensaje")
          //////////realizar acciones adicionaes con el mensaje recibido //////////  

        });
        //+++++++++++++2+++++++++++++
        socket.on('mensaje', ()=>{
            socket.broadcast.emit('mensaje', "mensajebroadcast");
        });
        /////3//////
        io.on("connection", socket =>{
            console.log("Usuario conectado");
            socket.on("notificacion", notification =>{
                io.emit("notificacion", {
                    user, notification
                });
                console.log(notification);
            })
        })
        //////////////4//////////////
        io.on("connection", socket => {
            console.log("Usuario Conecntado");
            socket.on("actualizacion", update =>{
                io.emit("actualizacion",{
                    user, update
                });
                console.log(update);
            })
        })
    });
}
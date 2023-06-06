const http = require("http")
const express = require("express")
const socketio = require("socket.io")

const app = express()
const server = http.createServer(app)
const io = socketio.listen(server)

app.set("port", process.env.PORT || 3000);
io.on('connection', (socket)=>{
    /* socket.on('chat',(msg)=>{
         console.log('Mensaje: '+msg)
     })*/
  socket.on('chat', (msg) =>{
         io.emit('chat', msg)
     })
 
 })

require("./socket")(io,app)

app.use(express.static("./public"))

server.listen(app.get("port"), () =>{
    console.log("Servidor corriendo en el puerto "+ app.get("port"));
});

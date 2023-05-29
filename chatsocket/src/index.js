const express = require("express");
const path = require("path");
const { createServer } = require("http");
const servidorRealtime = require("./servidorRealtime");
// const { Server } = require("socket.io"); 
const cookieParser = require("cookie-parser");
const app = express();
const httpServer = createServer(app);
//configuraciones
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.use(cookieParser());

//rutas
app.use(require("./routes"));
// Public
app.use( express.static( path.join(__dirname, "public") ) );

// servidor en puerto 3000
httpServer.listen( app.get("port"), () => {
    console.log("El servidor está corriendo en el puerto ", app.get("port"));
} );



// Llamar al  servidor de Socket.io
servidorRealtime(httpServer);
// const io = new Server(httpServer);

// app.use (express.static(path.join(__dirname, "views")));
// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "views/index.html");
// });

// io.on("connection", socket => {
//     console.log(socket);
//     console.log(socket.id);

// });

// httpServer.listen(3000);
const socket = io();
const enviar = document.querySelector("#enviar-mensaje");
const mostrarMensajes = document.querySelector("#todosMensajes");

enviar.addEventListener("click", () => {

    const message = document.querySelector("#message");

    socket.emit("message", message.value);
    message.value = "";

});

socket.on("message", ({user, message}) => {
    const horaActual = new Date().toLocaleTimeString();
    const msg = document.createRange().createContextualFragment(/*html*/`
    <div class="message">
                
        <div class="image-container">
            <img src="/imagen/mujer.png">
        </div>

        <div class="message-body">
            
            <div class="user-info">
                <span class="username">${user}</span>
                <span class="time">Hace 1 segundo</span>
                <span class="time">${horaActual}</span>
            </div>
            <p>${message}</p>
        </div>
    </div>
    `);

    mostrarMensajes.append(msg);

});
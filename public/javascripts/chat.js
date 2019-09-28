const socket = io();
// let btn = document.getElementById("send");
// let output = document.getElementById("outpu");
// let actions = document.getElementById("actions");



// btn.addEventListener('click', function(){
//     socket.emit("chat:message", {
//         message: message.value,
//         username: username.value
//     });
// });

function send (){
    let message = document.form.username.value;
    let username = document.form.message.value;
    socket.emit("chat:message", {
        message: message,
        username: username
    });
}

socket.on("chat:message", (data)=>{
    console.log(data);
});




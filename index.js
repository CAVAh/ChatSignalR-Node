const signalR = require("@microsoft/signalr");

let connection = new signalR.HubConnectionBuilder()
    .withUrl("http://192.168.68.135:5260/chat/signalr")
    .build();

connection.on("ReceiveMessage", (user, msg) => {
    console.log('user+msg', user + '+' + msg);
});

connection.start()
    .then(() => connection.invoke("SendMessage", "user", "msg"));
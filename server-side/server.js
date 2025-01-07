const Websocket = require("ws");

const SocketServer = new Websocket.Server({ port: 8080 });

SocketServer.on("connection", (user) => {
  console.log(`user connected to server`);
  user.on("message", (message) => {
    SocketServer.clients.forEach((client) => {
      if (client.readyState == Websocket.OPEN) {
        // console.log()
        client.send(message);
      }
    });
  });
});

console.log("server running on port : 8080");

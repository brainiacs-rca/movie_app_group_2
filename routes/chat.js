const { Server } = require("socket.io");
module.exports = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST", "PUT", "DELETE"],
    },
  });
  io.on("connection", (socket) => {
    socket
      .on("action", (action) => {
        console.log(action, "action derived");
      })
      .on("disconnect", () => {
        console.log("disconnected");
      });
  });
};

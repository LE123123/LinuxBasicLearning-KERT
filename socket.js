module.exports = (server, app) => {
  const io = require("socket.io")(server, {
    path: "/socket.io",
  });

  app.set("io", io);

  const room = io.of("/room");

  room.on("connection", (socket) => {
    socket.on("disconnect", () => {
      console.log("room 네임스페이스 접속 해제");
    });
  });
};

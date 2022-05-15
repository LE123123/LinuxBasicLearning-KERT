const { app } = require("./app");
const webSocket = require("./socket");

const server = app.listen(app.get("PORT"), () => {
  console.log(`listening on *:${app.get("PORT")}`);
});

webSocket(server, app);

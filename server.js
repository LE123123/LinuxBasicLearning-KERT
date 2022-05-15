import http from "http";

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("Hello World!");
});

server.listen(PORT, () => {
  console.log(`Server is running in PORT ${PORT}`);
});

// https://drive.google.com/drive/folders/1pDQSxv0ErQRviEQovHhjpZfvxEr_Kk4y

const http = require('http');

const hostname = '127.0.0.1';
const port = 4000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Abhishek Chauhan');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
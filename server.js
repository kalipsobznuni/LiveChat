const http = require('http');
const fs = require('fs');
const WebSocketServer = require ('ws').Server;

const port = 8080;

const httpServer = http.createServer((req, res) => {
  switch (req.url) {
 case '/':
   fs.readFile('public/index.html',
   'utf-8',
   (_, data) => res.end(data));
   break;
   case '/bundle.js':
    fs.readFile('public/bundle.js',
		'utf-8',
		(_, data) => res.end(data));
    break;
  default: res.end();}
});

httpServer.listen(port, () =>
		  console.log(`Check localhost:${port}`)
);

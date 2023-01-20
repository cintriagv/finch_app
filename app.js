const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end('Hello World');
  console.log(`JS request ran! this is hopefully on terminal - text updated?`);
});



server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function credentials() { return {
  credentials:{
    client_id:"f010187a-625c-474a-b9c5-461445989809",
    client_secret:"finch-secret-sandbox-ya62euO8iEcjdzuKfU7MeIyZroaiH0WdJqtKRhFl"
  },
};
}

const open = require('open');

// opens the url in the default browser 
open('file:///home/chrisxiv/projects/JavaScript/a_0_finch/frontend/index.html');
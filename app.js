const http = require('http');

const hostname = '127.0.0.1';
const port_begin = 3000;
const port_new = 4000;

const server_begin = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.write(Buffer.from({
    someKey: 'https://connect.tryfinch.com/authorize?&client_id=f010187a-625c-474a-b9c5-461445989809&products=directory individual employment payment pay_statement&redirect_uri=https://example.com&sandbox=true'
  })
  );
  res.end();
  console.log(`server_begin request just ran!`);
});

const server_new = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.write(
    'this is from the new server'
  );
  res.end();
  console.log(`this is a new server`);
});

server_begin.listen(port_begin, hostname, () => {
  console.log(`Server running at http://${hostname}:${port_begin}/`);
});

server_new.listen(port_new, hostname, () => {
  console.log(`Server running at http://${hostname}:${port_new}/`);
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
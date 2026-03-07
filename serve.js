const http = require('http');
const fs = require('fs');
const path = require('path');
http.createServer((req, res) => {
  fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
}).listen(8091, () => console.log('Server running on http://localhost:8091'));

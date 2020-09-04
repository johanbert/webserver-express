const http = require('http');
const port = 8080

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: 'johanbert',
            edad: 32,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(port)

console.log(`Escuchando puerto 8080`);
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8001; // Porta do servidor, padrão 8001
const HTML_FILE_PATH = path.join(__dirname, 'index.html'); 

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/index.html') {
        fs.readFile(HTML_FILE_PATH, (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end('Erro interno do servidor');
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else {
        // Se a solicitação não for para o arquivo HTML, responder com 404 Not Found
        res.writeHead(404);
        res.end('404 Not Found');
    }
});

// Iniciar servidor
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/`);
});

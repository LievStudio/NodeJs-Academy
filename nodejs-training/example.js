const http = require('http');
const PORT = 3000;

const server = http.createServer();

server.on('request', (req, res) => {
    console.log('=== Request');
    const jsonRes = {
        message: 'My Message'
    };
    res.write(`${JSON.stringify(jsonRes)}
    `);
    res.end();
});

server.listen(PORT, () => console.log(`Server listening on PORT , ${PORT}`));
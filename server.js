const http = require('http');

const server = http.createServer((req,res) => {
    res.end('hello world')
})

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`server runing at http://localhost:${PORT}`)
})
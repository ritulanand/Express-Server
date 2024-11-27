const express = require('express');


//create server
const server = express();

//listen for default request

server.get("/", (req,res, next) => {
    console.log("first middleare hit");
    next();
})

server.get("/", (req,res) => {
    res.set('Content-Type', 'text/plain');
   res.send("heello world ! this is  express server")
})

server.post("/", (req,res) => {
    res.status(201).send("post request received");
})

server.put("/", (req,res) => {
    res.send("put request received");
})


server.delete('/', (req,res) => {
    res.send('Delete request received');
})

//listen on specified port

server.listen(3100, () => {
    console.log("server is running on 3100")
})
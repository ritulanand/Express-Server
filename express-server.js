const express = require('express');


//create server
const server = express();

//listen for default request

server.get("/", (req,res) => {
    res.send("welcome to express seerver")
})

//listen on specified port

server.listen(3100, () => {
    console.log("server is running on 3100")
})
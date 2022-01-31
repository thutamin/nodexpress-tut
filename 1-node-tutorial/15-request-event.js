const http = require('http');

// const server = http.createServer((req,res)=>{})

// Using Event Emitter

const server = http.createServer()
// emits request evetn
// subscribe to it, listen to it / respond to id

server.on('request',(req,res)=>{
    res.end("Welcome")
})
server.listen(5000)
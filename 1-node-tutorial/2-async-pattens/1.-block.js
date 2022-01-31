// Asynchronous patters in node js
// when we were setting up the file system module, there were two ways of doing that by sync and aysnc methods
// While the asynchronous way was great and not blocking the event loop, the problem is if we are using callbacks, it gets really messy

const http = require('http');

const server = http.createServer((req,res)=>{
    if (req.url === "/"){
        res.end("Home Page")
    }
    else if (req.url === "/about"){
        // BLOCKING CODE !!!!
        for(let i = 0; i<100;i++){
            for(let j = 0;j<1000;j++){
                console.log(`${i} ${j}`)
            }
        }
        res.end("About Page")
    }
    else{
        res.end("Error Page")
    }
})

server.listen(5000,()=>{
    console.log("Server is listening on port 5000...")
})
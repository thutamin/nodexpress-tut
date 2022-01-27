const http = require('http')


// First run of code

// const server = http.createServer((req,res)=>{
//     console.log(req)
//     res.write('Welcome to our home page');
//     res.end()
// }) // create server is looking for a callback // the first parameter represents the incoming request, the second parameter represents the response
// server.listen(5000) // server must be always open

// Second run of code

const server = http.createServer((req,res)=>{
    if (req.url === "/"){
        //res.write("Welcome to our home");
        res.end("Welcome to our home")
    }
    else if (req.url === "/about"){
        //res.write("Welcome to the about page");
        res.end("Welcome to the about page")
    }
    else{
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">Back Home</a>
        `)
    }

})
server.listen(5000)
const http = require("http")


const server = http.createServer((req, res)=>{
 res.end("Hey Beauty")
})

server.listen(5000, ()=>{
    
    console.log("server is working")
    
})

// if(req.url === "/"){
    //     res.end(
    //         <h1>Home</h1>
    //     )
    // }
    // else if (url === "/about"){
    //     res.end(
    //         <h1>About</h1>
    //     )
    // }
    // else{
    //     <h1>Page not found</h1>
    // }

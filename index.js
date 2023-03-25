const http = requires("http")
const server = http.createServer(()=>{

})

server.listen(5000, (req, res)=>{
    
    if(req.url === "/"){
        res.end(
            <h1>Home</h1>
        )
    }
    else if (url === "/about"){
        res.end(
            <h1>About</h1>
        )
    }
    else{
        <h1>Page not found</h1>
    }

})
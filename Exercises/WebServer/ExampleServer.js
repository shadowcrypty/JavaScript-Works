const http = require('http');

const server= http.createServer((req,res)=>{

    const url=req.url;
    if (url ==="/") {
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h1>index sayfasi<h1>");     
    }
    else if (url === "/about"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h1>about sayfasi<h1>");
    }else if (url === "/contact"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h1>contact sayfasi<h1>");
    }else{
        res.writeHead(404,{"Content-Type":"text/html"});
        res.write("<h1>404 sayfa bulunamadi<h1>")
    }
    res.end();

    
});

const port = 3000;

server.listen(port , ()=>{
    console.log('sunucu port %d de başlatıldı.',port);
});
const http = require('http');

const server= http.createServer((req,res)=>{

    const url=req.url;
    if (url ==="/") {
        res.write("<h2>index sayfasi<h2>");     
    }
    else if (url === "/hakkimda"){
        res.write("<h2>hakkimda sayfasi<h2>");
    }else if (url === "/iletisim"){
        res.write("<h2>iletisim sayfasi<h2>");
    }
    res.end();

    
});

const port = 5000;

server.listen(port , ()=>{
    console.log('sunucu port %d de başlatıldı.',port);
});
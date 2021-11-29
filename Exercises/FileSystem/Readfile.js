const fs = require('fs');

fs.readFile("info.txt","utf8",(err,data)=>{ // calback function
    if(err) console.log(err); // error control
    console.log(data+"\n This file read by \'Readfile.js\'."); //readed file print

});


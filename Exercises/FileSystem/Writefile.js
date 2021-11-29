const fs = require('fs');   

fs.writeFile("info.txt","\n This file created and modified by \'Writefile.js\' .","utf8",(err)=>{
    if(err) console.log(err);
});
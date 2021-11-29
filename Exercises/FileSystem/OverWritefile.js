const fs = require('fs');

fs.appendFile("info.txt","\n This text overwritten by \'OverWritefile\'","utf8",(err)=>{
    if(err) console.log(err)
});
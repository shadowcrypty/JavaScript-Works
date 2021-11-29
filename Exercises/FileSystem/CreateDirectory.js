const fs = require('fs');

fs.mkdir("firstdirectory/subdirectory",{recursive:true},(err)=>{
    if(err) console.log(err);

    console.log("first and first in sub directory created.");


});
        
    

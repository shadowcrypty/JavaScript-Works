const fs = require('fs');

fs.unlink("info.txt",(err)=>{
    if(err) console.log(err);

    console.log("'info.txt' text file is deleted")
})
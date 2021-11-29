const fs = require('fs');

fs.rmdir("firstdirectory",{recursive:true},(err)=>{

    if (err) console.log(err);

    console.log("firstdirectory and all subs folder is deleted.")
});
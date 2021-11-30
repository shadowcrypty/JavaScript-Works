const fs = require('fs');
var empInfo='{"name": "Employee 1 Name", "salary": 2000}'
var updatedEmp='{"name": "Employee 1 Name", "salary": 3000}'
fs.writeFile("employees.json",empInfo,(err)=>{
    if(err) console.log(err);
});
fs.readFile("employees.json","utf8",(err,data)=>{
    if(err) console.log(err);
    console.log(data)
});
fs.appendFile("employees.json",updatedEmp,(err)=>{
    if(err) console.log(err);

});

fs.unlink("employees.json",(err)=>{
    if(err) console.log(err);

});
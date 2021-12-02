const express = require('express');
const app =express();

app.get("/",(req,res)=>{
    res.status(200).send("index page")
});
app.get("/about",(req,res)=>{
    res.status(200).send("about page")
});app.get("*",(req,res)=>{
    res.status(404).send("404 page not found")
});

const port = 3000;

app.listen(port, ()=> {
    console.log(`Sunucu port ${port} da çalışmaya başladı...`)
});
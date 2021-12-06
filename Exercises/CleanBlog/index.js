const express = require('express');

const app = express();


app.get("/",(req,res)=>{
    const blog={
        id: 1, title: "Blog title", description: "Blog description"
    }
    res.send(blog);
});

app.listen(3000,()=>{
    console.log("its working now")
});
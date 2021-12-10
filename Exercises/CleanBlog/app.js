const express = require("express");
const ejs = require("ejs");
const app = express();

//templateengine
app.set("view engine", "ejs");

//middleware
app.use(express.static("public"));
//routes
app.get("/", (req, res) => {
    res.render("index");
  });app.get("/index", (req, res) => {
    res.render("index");
  });
  
 app.get("/about", (req, res) => {
    res.render("about");
  });
  app.get("/add_post", (req, res) => {
    res.render("add_post");
  });
      
app.listen(3000, () => {
  console.log("its working now");
});

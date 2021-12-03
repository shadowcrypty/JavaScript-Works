const koa = require('koa');
const routes = require('koa-route');// this package using for create different page extensions

const app = new koa();

app.use(routes.get("/",ctx=>{
    ctx.body = "<h1>hello</h1>"
}));
app.use(routes.get("/about",ctx=>{
    ctx.body = "<h1>about me</h1>"
}));app.use(routes.get("/contact",ctx=>{
    ctx.body = "<h1>contact me</h1>"
}));
app.listen(3000);
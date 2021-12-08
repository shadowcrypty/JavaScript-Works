const express = require('express');
const path = require('path');
const ejs = require('ejs');
const app = express();

const myLogger = (req, res, next) => {
  console.log('middleware');
  next();
};
//template engine
app.set('view engine', 'ejs');

//middlewares
app.use(express.static('public'));
app.use(myLogger);

app.get('/', (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  res.render('index');
});

const port = 3000;

app.listen(port, () => {
  console.log(`${port} on local server live`);
});
